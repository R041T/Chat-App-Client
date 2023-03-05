import './SideNavHeader.css'
import {auth} from '../../firebaseAuth'
import {signOut} from 'firebase/auth'
import {useSelector} from 'react-redux'

export function SideNavheader(){

  const userdetail = useSelector(state => state.user)

  if(userdetail.user !== undefined) { 

    return (
      <div className='header-div'>
      <div className="profile">
        <img src={`${userdetail.user.displaypic}`} alt='avatarimage' className='avatarimg'/>
</div>
      <h2 className='signout-btn' onClick={handleClick}>Signout</h2>
      </div>
)

  }
    
  
    
}

function handleClick(){
    signOut(auth).then(() => {
      window.location.href = process.env.REACT_APP_HOST_URL;
    }).catch((error) => {
      // An error happened.
    });
}