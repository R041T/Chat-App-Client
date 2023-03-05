import './ChatItemContainer.css'
import {useDispatch} from 'react-redux'
import {updateCurrentChat} from '../../store/currentChat'


export function ChatItemContainer({ChatID,Name, PhotoUrl, Time,Snippet,Unread}){
    const dispatch = useDispatch();

    return (
        <div className='chatitem'>
            <div className='avatar'>
                <img src={PhotoUrl} alt='avatarimage' className='avatarimg'/>
            </div>
            <div className='message-summary' onClick={()=>handleClick()}>
                <div className='chat-item-row1'>
                    <header className='chat-name'>
                        <b><p>{Name}</p></b>
                    </header>
                    <p className='last-chat-time'> {Time}</p>
                </div>
                
                <div className='chat-item-row2'>
                    <p className='chat-snippet'>{Snippet}</p>
                    <p className='unread-count'> {Unread}</p>
                </div>
                
            </div>
        </div>
    );

    function handleClick(){
        dispatch(updateCurrentChat(ChatID));
    }
}