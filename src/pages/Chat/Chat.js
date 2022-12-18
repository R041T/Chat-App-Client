import './Chat.css'
import {ChatNav} from '../../components/ChatNav/ChatNav'
import {ToolsNav} from '../../components/ToolsNav/ToolsNav'
import { ChatField } from '../../components/ChatField/ChatField'

export function Chat(){
    return (
    <div className='chat'>
        <div className='chat-sidenav'><ChatNav/></div> 
        <header className='chat-header'></header>
        <main className='main-chat'></main>
        <div className='chat-field'><ChatField/></div>
        <div className='tools-nav'><ToolsNav/></div>
        
    </div>
    )
}

