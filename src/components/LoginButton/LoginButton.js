import './LoginButton.css'
import {auth,provider} from '../../firebaseAuth'
import {signInWithPopup} from 'firebase/auth';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {userDataAdd} from '../../store/userSlice'



export function LoginButton(){
  const dispatch = useDispatch();
    return(
        <button className='loginBtn' onClick={()=>{handleLogin(dispatch)}}>
        Sign In
      </button>
    );

    async function handleLogin(dispatch){

      auth.onAuthStateChanged(async (user) => {
        if (user) {
          console.log('using dispatch');    
        await dispatch(userDataAdd());
        let payload = { email: user.email, name: user.displayName, photoUrl: user.photoURL};
        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/createuser`, payload);
          window.location.href=process.env.REACT_APP_HOST_URL+"/chat";
        } else {
          signInWithPopup(auth, provider)
      .then(async (result) => {
        
    
    
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
}