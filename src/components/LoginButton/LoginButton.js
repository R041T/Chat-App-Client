import './LoginButton.css'
import {auth,provider} from '../../firebaseAuth'
import {signInWithPopup} from 'firebase/auth';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {userDataAdd} from '../../store/userSlice'

async function handleLogin(dispatch){

  auth.onAuthStateChanged((user) => {
    if (user) {
      window.location.href=process.env.REACT_APP_HOST_URL+"/chat";
    } else {
      signInWithPopup(auth, provider)
  .then(async (result) => {

    console.log('using dispatch');    
    await dispatch(userDataAdd());
    let payload = { email: result.user.email, name: result.user.displayName, photoUrl: result.user.photoURL};
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}`, payload);
    window.location.href = process.env.REACT_APP_HOST_URL+"/chat";



  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
  }); 
  
    
}

export function LoginButton(){
  const dispatch = useDispatch();
    return(
        <button className='loginBtn' onClick={()=>{handleLogin(); dispatch(userDataAdd())}}>
        Sign In
      </button>
    );
}