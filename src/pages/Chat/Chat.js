import './Chat.css'
import {ChatNav} from '../../components/ChatNav/ChatNav';
import { ChatField } from '../../components/ChatField/ChatField';
import {SideNavheader} from '../../components/SideNavHeader/SideNavHeader';
import {MessageBox} from '../../components/MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { userDataAdd } from '../../store/userSlice';
import { selectChatData, initChatList, addMessage, chatListAdd } from '../../store/chatListSlice';
import {useState, useEffect} from 'react';
import axios from 'axios'
import { socket } from '../../socket';
import Lottie from 'lottie-react';
import chatDefault from '../../assets/lotties/chat-default.json'

export function Chat(){
    const dispatch = useDispatch();    

    let currChat = useSelector(state => state.currentchat).currentchat;
    let currChatId="";
    let currChatName = "";
    let isCurrChatNew=false;
    let isChatSelected =false;
    
    if(currChat!==undefined){
        isCurrChatNew=currChat.isNewChat;
        currChatId=currChat.chatid;
        currChatName=currChat.name;
        isChatSelected=true;
    }

    const [userSignedIn, setuserSignIn] = useState(false);
    const userdetail = useSelector(state => state.user)

    if(currChat===undefined) currChat='';

    let chatData = useSelector((state) =>selectChatData(state, currChatId));
    let messageList=[];
    let messages = [];
    if(chatData[0]!==undefined){
        messages = chatData[0].messages;
        messageList = messages.map((n,index)=> <div className='messagebox' key={index}><MessageBox Message={n}/></div>);
    }
 
    useEffect(() => {
        const rooms = [];

        const getChatList = async () =>{
            if(userdetail.user !== undefined){
                let payload = { curruser: userdetail.user.id};
                const result = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/chatlist`, payload);
                const chatlist = [];
                result.data.forEach((n,index)=>{
                    rooms.push({roomid: result.data[index].roomid});
                    chatlist.push({chatid: result.data[index].roomid, name:result.data[index].name, photoUrl: result.data[index].photoUrl,isNewChat:false,messages: result.data[index].messagedetails});
                });
                dispatch(initChatList(chatlist));
                rooms.push({roomid: userdetail.user.id});
                socket.emit("join-rooms",rooms);
            }
        }
        getChatList();


        function onConnect() {
          if(rooms[0]!==undefined){
            socket.emit("join-rooms",rooms);
          }
        }
    
        function onDisconnect() {
        }
    
        function getMessage(value) {
            if(userdetail.user.id !== value.message.sender){
                dispatch(addMessage(value));
            }
        }

        function joinNewRoom(value) {
            socket.emit("join-rooms",[{roomid:value}])
        }

        async function addNewChat(value) {
            console.log(value);
            let payload = { roomid: value.data.chatid, curruser:value.sender} ;
            const result = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/roomusers`, payload);
            console.log(result.data[0].userid);
            if(result.data[0].userid===userdetail.user.id){
                dispatch(chatListAdd(value.data));
            }
        }
    
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('message', getMessage);
        socket.on('notify-user', joinNewRoom);
        socket.on('new-chat', addNewChat);

    
        return () => {
          socket.off('connect', onConnect);
          socket.off('disconnect', onDisconnect);
          socket.off('message', getMessage);
          socket.off('notify-user', joinNewRoom);
          socket.off('new-chat', addNewChat);
        };
      }, [userdetail.user,dispatch]);

    
      useEffect(()=>{
        const auth = getAuth();
        var authuser='';

        onAuthStateChanged(auth, async (user) => {
        if (user) {
            authuser = user;
            if(userSignedIn===false){ // Making sure we only fetch user data on page load
                let payload = { email: authuser.email};
                const result  = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/getuserid`,payload)
                dispatch(userDataAdd({id: result.data ,username: authuser.displayName, email: authuser.email, displaypic: authuser.photoURL}));
                setuserSignIn(true);
            }
            
    
        } else {
            signOut(auth).then(() => {
                window.location.href = process.env.REACT_APP_HOST_URL;
              }).catch((error) => {
                // An error happened.
              });
        }
        });
      },[dispatch,userSignedIn])

      function ChatBody(props) {
        const isChatSelected = props.isChatSelected;
        if (!isChatSelected) {
          return <>
          <div style={{display:"flex",flexDirection:"column" , justifyContent:"center",alignItems:"center"}}>
            <Lottie animationData={chatDefault} style={{ height: 600,width:600}}/>
            <b><h1 style={{color:"teal", fontFamily: "Garamond"}}>Select a Chat to Start</h1></b>
          </div>
          </>;
        }
        return <>{messageList}</>;
      }

    return (
    <div className='chat'>
        <header className='sidenav-header'>
        <SideNavheader/>
        </header>
        <section className='chat-sidenav'><ChatNav/></section> 
        <header className='chat-header'>
            <div className='chat-header-text'>
            <h1>{currChatName}</h1>
            </div>
        </header>
        
        <main className='main-chat'>
            <div id='chat-body' className={`chatbody ${getBodyClass(isChatSelected)}`}>
            <ChatBody isChatSelected={isChatSelected}/>
            </div>
            <div className={`chat-field-container ${getFieldClass(isChatSelected)}`}><ChatField currentChatId={currChatId} isNewChat={isCurrChatNew}/></div>
        </main>

        {/* <section className='tools-nav'><ToolsNav/></section>  */}
        {/* include for toolsnav section
         */}
    </div>
    )

    function getFieldClass(isChatSelected){
        if(!isChatSelected) return 'hide-field';
        else return '';       
    }

    function getBodyClass(isChatSelected){
        if(isChatSelected) return 'selected-dimensions';
        else return '';       
    }

}

