import './ChatItemContainer.css'

export function ChatItemContainer(){
    return (
        <div className='chatitem'>
            <div className='avatar'>
                <img src='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTUNYRJGfr6dAmrrvtz8mF5qV0ojVV9cuEFzswwOcfqxd4EDeDD05eO-KSs2uLidN92YVgeCdcpdthCF4E' alt='avatarimage' className='avatarimg'/>
            </div>
            <div className='message-summary'>
                <div className='chat-item-row1'>
                    <header className='chat-name'>
                        <b><p>Rohit Mahesh</p></b>
                    </header>
                    <p className='last-chat-time'> Yesterday</p>
                </div>
                
                <div className='chat-item-row2'>
                    <p className='chat-snippet'>Hey, Let's goooo</p>
                    <p className='unread-count'> 2</p>
                </div>
                
            </div>
        </div>
    );
}