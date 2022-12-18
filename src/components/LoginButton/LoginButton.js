import './LoginButton.css'
import {Link} from 'react-router-dom'


export function LoginButton(){
    return(
        <Link style={{"textDecoration":"none","color":"white","height":"inherit"}} to="/chat" relative="path">
        <button className='loginBtn'>
        Sign In
      </button>
      </Link>
    );
}