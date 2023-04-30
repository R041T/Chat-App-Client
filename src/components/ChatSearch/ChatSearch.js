import './ChatSearch.css'
import React, { useState } from 'react';
import {UserListContainer} from '../UserListContainer/UserListContainer'
import axios from 'axios'
import {useSelector} from 'react-redux'



export function ChatSearch(){
    const [displayResult, setResultState] = useState('result-not-visible');
    const [iconState, setIconState] = useState('magnifying-icon');
    const [userList, setUserList] = useState([]);

    const debounceLoadData = debounce(fetchUsers);
    const userdetail = useSelector(state => state.user)


    let UserListContainers = userList.map((n,index)=><div className='user-list-container' key={index}><UserListContainer Chatid={n.chatid} Userid={n.userid} Email={n.email} Name={n.name} PhotoUrl={n.photoUrl} Time={n.time} Snippet={n.snippet} Unread={n.unread} RemoveFromUserList={removeFromUserList} /></div>)

    return (
    <>
        <div className='search-bar'>        
            <div className={`search-icon ${iconState}`} onClick={updateSearchStates}></div>
            <input type='text' placeholder='Search User' id = 'searchInput' onChange={e=>debounceLoadData(e.target.value)}/>
        </div>
        <div className={`search-results ${displayResult}`} >
            <div style={{marginTop: "10px"}}>
                {UserListContainers}
            </div>
        </div>
    </>
    );



function debounce(func, timeout = 700){
    let timer;
    return (searchState)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{func(searchState);},timeout);
        };
    }
    
    
    async function fetchUsers(searchTerm){
        setResultState('result-visible');
        setIconState('cancel-icon');
        let payload = { searchterm: searchTerm ,curruser: userdetail.user.id};
        const result  = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/userlist`,payload)
        setUserList(result.data)

    }

    function updateSearchStates(){
        setResultState('result-not-visible');
        setIconState('magnifying-icon');
    }

    function removeFromUserList(email){
        setUserList(userList.filter(function(user){return user.email !== email}))       
    }
}


