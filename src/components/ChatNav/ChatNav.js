import './ChatNav.css'
import {ChatSearch} from '../ChatSearch/ChatSearch'
import {ChatItemContainer} from '../ChatItemContainer/ChatItemContainer'
import {useSelector} from 'react-redux'


export function ChatNav(){

    let listItems2 = useSelector((state) => state.chatlist).map((n,index)=> <div className='chat-item-container' key={index}> <ChatItemContainer ChatID={n.chatid} Name={n.name} PhotoUrl={n.photoUrl} Time={n.time} Unread={n.unread} IsNewChat={n.isNewChat} />  </div>);

    return (
        <>
            <ChatSearch/>

            <div className = 'chatnav-list'>
                {listItems2}
            </div>
        </>
    )
}