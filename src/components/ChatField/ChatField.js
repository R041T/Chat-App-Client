import './ChatField.css'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage, selectChatData} from '../../store/chatListSlice'
import {useState} from 'react'
import axios from 'axios'
import {socket} from '../../socket'

export function ChatField({currentChatId,isNewChat}){


    const [messageState, setMessageState] = useState('');
    const [isnewChat, setChatState] = useState(isNewChat);
    const userdetail = useSelector((state) => state.user)
    const chatlist = useSelector((state) => state.chatlist)
    let chatData = useSelector((state) =>selectChatData(state, currentChatId));
    const dispatch = useDispatch();

    return(
        <div className='chat-field'>
        <input placeholder='Enter Message' type='text' id='chatinput' onKeyDown={_handleKeyDown} onChange={handleInputChange}></input>
        <button className='sendbtn'><img className='sendimg' src='./send-btn.png' alt='send btn' onClick={()=>handleSend(userdetail,chatlist)} /></button>
        </div>
    )

    function handleInputChange(event){
        setMessageState(event.target.value)
    }

    function updateScroll(){
        var element = document.getElementById("chat-body");
        element.scrollTop = element.scrollHeight;
    }


    async function handleSend(){
        let payload = { roomid: currentChatId, message:messageState, sender:userdetail.user.id, sendTime: "1900-01-01"} ;
        const result = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/addchatmessage`, payload);

        
        if(isnewChat){
            socket.emit("new-chat",{data:{chatid: currentChatId, name:userdetail.user.username, photoUrl: userdetail.user.displaypic,isNewChat:true ,messages:[{messageid:result.data, sender: userdetail.user.id,message: messageState, timeStamp: "1900-01-01T00:00:00.000Z", readReceipt:0}]},sender:userdetail.user.id});
            setChatState(false);    
        }
        else{
            socket.emit("message",{chatid:currentChatId,
                message:{messageid:result.data, sender: userdetail.user.id,message: messageState, timeStamp: "1900-01-01T00:00:00.000Z", readReceipt:0}});    
        }
        await dispatch(addMessage({chatid:currentChatId,
        message:{messageid:result.data, sender: userdetail.user.id,message: messageState, timeStamp: "1900-01-01T00:00:00.000Z", readReceipt:0}}));
        document.getElementById('chatinput').value=''
        updateScroll();
    }

    async function _handleKeyDown(e) {
        if (e.key === 'Enter') {
            let payload = { roomid: currentChatId, message:messageState, sender:userdetail.user.id, sendTime: "1900-01-01"} ;
            const result = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/addchatmessage`, payload);
            
            if(isnewChat){
                socket.emit("new-chat",{data:{chatid: currentChatId, name:userdetail.user.username, photoUrl: userdetail.user.displaypic,isNewChat:true ,messages:[{messageid:result.data, sender: userdetail.user.id,message: messageState, timeStamp: "1900-01-01T00:00:00.000Z", readReceipt:0}]},sender:userdetail.user.id});    
                setChatState(false); 
            }
            else{
                socket.emit("message",{chatid:currentChatId,
                    message:{messageid:result.data, sender: userdetail.user.id,message: messageState, timeStamp: "1900-01-01T00:00:00.000Z", readReceipt:0}});    
            }

            await dispatch(addMessage({chatid:currentChatId,
                message:{ messageid:result.data, sender: userdetail.user.id,message: messageState, timeStamp: "1900-01-01T00:00:00.000Z", readReceipt:0}}));
                document.getElementById('chatinput').value=''
            updateScroll();
        }
      }

}
