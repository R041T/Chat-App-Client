import './ChatField.css'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from '../../store/chatMessages'
import {useState} from 'react'

export function ChatField({currentChatId}){
    const [messageState, setMessageState] = useState('');
    const user = useSelector((state) => state.user)
    const chatlist = useSelector((state) => state.chatlist)

    const dispatch = useDispatch();
    return(
        <div className='chat-field'>
        <input placeholder='Enter Message' type='text' id='chatinput' onKeyDown={_handleKeyDown} onChange={handleInputChange}></input>
        <button className='sendbtn'><img className='sendimg' src='./send-btn.png' alt='send btn' onClick={()=>handleSend(user,chatlist)} /></button>
        </div>
    )

    function handleInputChange(event){
        setMessageState(event.target.value)
    }


    function handleSend(){
        dispatch(addMessage({chatid:currentChatId,
        message:{ senderemail: user.user.email, timestamp: "11:51pm", readstatus:"read",message: messageState}}));
        document.getElementById('chatinput').value=''
    }

    function _handleKeyDown(e) {
        if (e.key === 'Enter') {
            dispatch(addMessage({chatid:currentChatId,
                message:{ messageid:3, senderemail: user.user.email, timestamp: "11:51pm", readstatus:"read",message: messageState}}));
                document.getElementById('chatinput').value=''
        }
      }

}
