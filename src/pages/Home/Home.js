import './Home.css'
import {NavbarLanding} from '../../components/Navbar/Navbar'
import {LoginButton} from '../../components/LoginButton/LoginButton'
import {SignUpButton} from '../../components/SignUpButton/SignUpButton'
import {LandingHero} from '../../components/LandingHero/LandingHero'



export function Home(){
    return (
<div className='home'>
        <NavbarLanding/>
        <main className='main'>
            <div id="div-text">
                <p id="landing-text">The <em>Ultimate</em> Communication Platform</p>
                <p id='subheading-text'> Stay connected with your friends & family without interruption. 
                Send pictures, Images are more to people instantly accross the world.</p>
                <div style={{"margin-right":"20px", "display":"inline"}}><LoginButton></LoginButton></div>
                <div style={{"display":"inline"}}><SignUpButton/></div>
            </div>
            <div id="landing-image"><LandingHero/></div>
        </main>
    </div>
    )
}

