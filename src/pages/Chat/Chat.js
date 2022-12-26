import './Chat.css'
import {ChatNav} from '../../components/ChatNav/ChatNav'
import {ToolsNav} from '../../components/ToolsNav/ToolsNav'
import { ChatField } from '../../components/ChatField/ChatField'
import {SideNavheader} from '../../components/SideNavHeader/SideNavHeader'

export function Chat(){
    return (
    <div className='chat'>
        <header className='sidenav-header'>
        <SideNavheader/>
        </header>
        <section className='chat-sidenav'><ChatNav/></section> 
        <header className='chat-header'>
        </header>
        <main className='main-chat'>
            <div className='chatbody'></div>
        </main>
        <div className='chat-field-container'><ChatField/></div>
        <section className='tools-nav'><ToolsNav/></section>
        
    </div>
    )
}

