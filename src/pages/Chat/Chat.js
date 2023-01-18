import './Chat.css'
import {ChatNav} from '../../components/ChatNav/ChatNav'
import {ToolsNav} from '../../components/ToolsNav/ToolsNav'
import { ChatField } from '../../components/ChatField/ChatField'
import {SideNavheader} from '../../components/SideNavHeader/SideNavHeader'
import {MessageBox} from '../../components/MessageBox/MessageBox'

export function Chat(){
    let arr2 =[{'no':1,'isSelf':false},{'no':1,'isSelf':true},{'no':1,'isSelf':true},{'no':1,'isSelf':true},
    {'no':1,'isSelf':false},{'no':1,'isSelf':false},{'no':1,'isSelf':true},{'no':1,'isSelf':true},{'no':1,'isSelf':false}
    ,{'no':1,'isSelf':true},{'no':1,'isSelf':false},{'no':1,'isSelf':true},{'no':1,'isSelf':false},{'no':1,'isSelf':true}
    ,{'no':1,'isSelf':true},{'no':1,'isSelf':true},{'no':1,'isSelf':true},{'no':1,'isSelf':true},{'no':1,'isSelf':true},{'no':1,'isSelf':true},{'no':1,'isSelf':true}];

    let listItems = arr2.map((n,index)=> <div className='messagebox' key={index}><MessageBox isSelf={n.isSelf}/></div>);

    return (
    <div className='chat'>
        <header className='sidenav-header'>
        <SideNavheader/>
        </header>
        <section className='chat-sidenav'><ChatNav/></section> 
        <header className='chat-header'>
        </header>
        <main className='main-chat'>
            <div className='chatbody'>
                {listItems}
            </div>
        </main>
        <div className='chat-field-container'><ChatField/></div>
        <section className='tools-nav'><ToolsNav/></section>
        
    </div>
    )
}

