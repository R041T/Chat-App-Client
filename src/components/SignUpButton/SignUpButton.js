import './SignUpButton.css'
import {Link} from 'react-router-dom'
export function SignUpButton(){
    return(
        <Link style={{"textDecoration":"none","color":"white","height":"inherit"}} to="/chat" relative="path">
        <button className='signupBtn border-gradient border-gradient-purple'>
        Try Me
      </button>
      </Link>
    );
}

