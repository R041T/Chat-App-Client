import './SideNavHeader.css'
import {auth} from '../../firebaseAuth'
import {signOut} from 'firebase/auth'

export function SideNavheader(){
    return (
            <div className='header-div'>
            <div className="profile">
              <img src='https://lh3.googleusercontent.com/a/AEdFTp4ZunOpBImkAKBzwP4XXPDcPAlulGWtpXqELk8NcD0' alt='avatarimage' className='avatarimg'/>
</div>
            <h2 className='signout-btn' onClick={handleClick}>Signout</h2>
            </div>
    );
}

function handleClick(){
    signOut(auth).then(() => {
      window.location.href = process.env.REACT_APP_HOST_URL;
    }).catch((error) => {
      // An error happened.
    });
}