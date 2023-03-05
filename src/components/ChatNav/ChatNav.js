import './ChatNav.css'
import {ChatSearch} from '../ChatSearch/ChatSearch'
import {ChatItemContainer} from '../ChatItemContainer/ChatItemContainer'
import {useSelector} from 'react-redux'
export function ChatNav(){

    let arr = useSelector((state) => state.chatlist);

    let listItems = arr.map((n,index)=> <div className='chat-item-container' key={index}> <ChatItemContainer ChatID={n.chatid} Name={n.name} PhotoUrl={n.photoUrl} Time={n.time} Snippet={n.snippet} Unread={n.unread} />  </div>);

    return (
        <>
            <ChatSearch/>

            <div className = 'chatnav-list'>
                {listItems}
            </div>
        </>
    )
}