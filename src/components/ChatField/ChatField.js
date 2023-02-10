import './ChatField.css'
import { useDispatch, useSelector } from 'react-redux'



function handleSend(count){
    console.log(count)
}

export function ChatField(){

    
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return(
        <div className='chat-field'>
        <input placeholder='Enter Message' type='text' id='chatinput'></input>
        <button className='sendbtn'><img className='sendimg' src='./send-btn.png' alt='send btn' onClick={()=>handleSend(count)} /></button>
        </div>
    )
}
