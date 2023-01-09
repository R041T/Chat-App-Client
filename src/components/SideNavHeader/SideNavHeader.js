import './SideNavHeader.css'
import {auth} from '../../firebaseAuth'
import {signOut} from 'firebase/auth'

export function SideNavheader(){
    return (
            <div className='header-div'>
            <h2 className="sidenavTitle">Your Profile</h2>
            <h2 className='signout-btn' onClick={handleClick}>signout</h2>
            </div>
    );
}

function handleClick(){
    signOut(auth).then(() => {
      window.location.href = "http://localhost:3000";
    }).catch((error) => {
      // An error happened.
    });
}