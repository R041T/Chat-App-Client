import './ChatField.css'



export function ChatField(){
    return(
        <div className='chat-field'>
        <input placeholder='Enter Message' type='text' id='chatinput'></input>
        <button className='sendbtn'><img className='sendimg' src='./send-btn.png' alt='send btn' /></button>
        </div>
    )
}