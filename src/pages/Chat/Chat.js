import './Chat.css'
import {ChatNav} from '../../components/ChatNav/ChatNav';
import {ToolsNav} from '../../components/ToolsNav/ToolsNav';
import { ChatField } from '../../components/ChatField/ChatField';
import {SideNavheader} from '../../components/SideNavHeader/SideNavHeader';
import {MessageBox} from '../../components/MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { userDataAdd } from '../../store/userSlice';
import { selectChatData } from '../../store/chatMessages';
import {useEffect} from 'react';
import axios from 'axios'

export function Chat(){
    const dispatch = useDispatch();    

    let currChat = useSelector(state => state.currentchat).currentchat;
    if(currChat===undefined) currChat='';
    
    let chatData = useSelector((state) =>selectChatData(state, currChat));

    let listItems =[];
    if(chatData[0]!==undefined){
        const messages = chatData[0].message;
        listItems = messages.map((n,index)=> <div className='messagebox' key={index}><MessageBox Message={n}/></div>);
    }
   

    var authuser='';
    
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
    if (user) {
        authuser = user;
        let payload = { email: authuser.email};
        const result  = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/getuserid`,payload)
        console.log(result.data);
        dispatch(userDataAdd({id: result.data ,username: authuser.displayName, email: authuser.email, displaypic: authuser.photoURL}))
        getChatList();

    } else {
        signOut(auth).then(() => {
            window.location.href = process.env.REACT_APP_HOST_URL;
          }).catch((error) => {
            // An error happened.
          });
    }
    });

    return (
    <div className='chat'>
        <header className='sidenav-header'>
        <SideNavheader/>
        </header>
        <section className='chat-sidenav'><ChatNav/></section> 
        <header className='chat-header'>
        </header>
        <main className='main-chat'>
            <div className='chatbody'>
                {listItems}
            </div>
        </main>
        <div className='chat-field-container'><ChatField currentChatId={currChat}/></div>
        <section className='tools-nav'><ToolsNav/></section>
        
    </div>
    )


    async function getChatList(){
        let payload = { curruser: authuser.email};
        // const result = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/chatlist`, payload);
        // console.log(result);
    }
}

