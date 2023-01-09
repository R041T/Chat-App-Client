import './MessageBox.css'

export function MessageBox({isSelf}){
    return (
        <div className={`message-div ${getClass(isSelf)}`}>
        <p className='message'>Hey this is a smeßsssssssssssssssssssssssssssssssssssage</p>
        <div className='msg-info'>
        <span className='msg-time'>12:45pm</span>
        <span className='read-receipt'>read</span>
        </div>
        </div>
    );
}

function getClass(isSelf){
    if(isSelf) return 'message-self';
    else if(!isSelf) return 'message-friend';
}