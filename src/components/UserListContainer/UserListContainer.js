import './UserListContainer.css'

export function UserListContainer(){
    return (
        <div className='user-details'>
                <div className='avatar'>
                    <img src='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTUNYRJGfr6dAmrrvtz8mF5qV0ojVV9cuEFzswwOcfqxd4EDeDD05eO-KSs2uLidN92YVgeCdcpdthCF4E' alt='user profile pic' className='avatarimg'/>
                </div>
                <header className='username'>
                        <b><p>Rohit Mahesh</p></b>
                </header>
                <img className='addimg' src="./plus-icon.png" alt='add-chat'></img>
        </div>
    );
}