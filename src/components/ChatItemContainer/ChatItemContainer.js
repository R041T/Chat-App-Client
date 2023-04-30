import './ChatItemContainer.css'
import {useDispatch, useSelector} from 'react-redux'
import {updateCurrentChat} from '../../store/currentChat'
import { selectLastMessage} from '../../store/chatListSlice';


export function ChatItemContainer({ChatID,Name, PhotoUrl, Time,Unread=0,IsNewChat=false}){
    const dispatch = useDispatch();
    let lastMessageDetails = useSelector((state) =>selectLastMessage(state, ChatID));
    let messageSnippet ="";
    if(lastMessageDetails!==undefined){
        messageSnippet=lastMessageDetails.message;
    }
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
                    <div className='chat-snippet'>{messageSnippet}</div>
                    {/* <p className='unread-count'> {Unread}</p> */}
                </div>
                
            </div>
        </div>
    );

    function handleClick(){
        dispatch(updateCurrentChat({chatid:ChatID,name:Name,isNewChat:IsNewChat}));
    }
}