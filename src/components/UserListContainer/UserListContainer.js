import './UserListContainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { chatListAdd } from '../../store/chatListSlice'
import axios from 'axios'

export function UserListContainer({Chatid, Userid, Email,Name,PhotoUrl,Time,Snippet,Unread, RemoveFromUserList}){
    const dispatch = useDispatch();
    const userdetail = useSelector(state => state.user);

    return (
        <div className='user-details'>
            <div className='user'>
                <div className='avatar'>
                    <img src={PhotoUrl} alt='user profile pic' className='avatarimg'/>
                </div>
                <header className='username'>
                        <b><p>{Name}</p></b>
                </header>
            </div>
                <img className='addimg' src="./plus-icon.png" alt='add-chat' onClick={() => handleAddUser(RemoveFromUserList)}></img>
        </div>
    );

    async function handleAddUser(removeFromUserList){
        removeFromUserList(Email);
        console.log(userdetail.user.id,Userid);
        let payload = { isPrivate: true,starter: userdetail.user.id, recipient: Userid} ;
       const result = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/addchat`, payload);
        dispatch(chatListAdd({chatid: result.data, email:Email, name:Name, photoUrl: PhotoUrl,time:Time,snippet:Snippet,unread:Unread}))

    }
}