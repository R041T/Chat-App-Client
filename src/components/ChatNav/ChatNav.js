import './ChatNav.css'
import {ChatSearch} from '../ChatSearch/ChatSearch'
import {ChatItemContainer} from '../ChatItemContainer/ChatItemContainer'
export function ChatNav(){

    let arr = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    const listItems = arr.map((n,index)=> <div className='chat-item-container' key={index}> <ChatItemContainer/>  </div>);

    return (
        <>
            <ChatSearch/>
            <div className = 'chatnav-list'>
                {listItems}
            </div>
        </>
    )
}