import './MessageBox.css'
import {useSelector} from 'react-redux'

export function MessageBox({Message}){
    const user = useSelector(state =>state.user).user;

    if(user!==undefined){
        return (
            <div className={`message-div ${getClass(Message)}`}>
            <p className='message'>{Message.message}</p>
            <div className='msg-info'>
            <span className='msg-time'>{Message.timestamp}</span>
            <span className='read-receipt'>{Message.readstatus}</span>
            </div>
            </div>
        );
    
    }
   
    function getClass(message){
            if(message.sender===user.id) return 'message-self';
            else return 'message-friend';       
    }
}

