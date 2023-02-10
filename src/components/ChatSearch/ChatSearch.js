import './ChatSearch.css'
import React, { useState } from 'react';
import {UserListContainer} from '../UserListContainer/UserListContainer'

export function ChatSearch(){
    const [displayResult, setResultState] = useState('result-not-visible');
    const [iconState, setIconState] = useState('magnifying-icon');

    const processChange = debounce(()=> fetchUsers());
    let userdetails = [
        {name:"rohit",picture:"https://lh3.googleusercontent.com/a/AEdFTp4ZunOpBImkAKBzwP4XXPDcPAlulGWtpXqELk8NcD0"},
        {name:"rohit2",picture:"https://lh3.googleusercontent.com/a/AEdFTp4ZunOpBImkAKBzwP4XXPDcPAlulGWtpXqELk8NcD0"},
        {name:"rohit2",picture:"https://lh3.googleusercontent.com/a/AEdFTp4ZunOpBImkAKBzwP4XXPDcPAlulGWtpXqELk8NcD0"},
        {name:"rohit2",picture:"https://lh3.googleusercontent.com/a/AEdFTp4ZunOpBImkAKBzwP4XXPDcPAlulGWtpXqELk8NcD0"},
        {name:"rohit2",picture:"https://lh3.googleusercontent.com/a/AEdFTp4ZunOpBImkAKBzwP4XXPDcPAlulGWtpXqELk8NcD0"},
        {name:"rohit2",picture:"https://lh3.googleusercontent.com/a/AEdFTp4ZunOpBImkAKBzwP4XXPDcPAlulGWtpXqELk8NcD0"}
    ]

    let UserListContainers = userdetails.map((n,index)=><div className='user-list-container' key={index}><UserListContainer/></div>)

    return (
    <>
        <div className='search-bar'>        
            <div className={`search-icon ${iconState}`} onClick={updateSearchStates}></div>
            <input type='text' placeholder='Search User' id = 'searchInput' onKeyUp={processChange}></input>
        </div>
        <div className={`search-results ${displayResult}`} >
            <div style={{marginTop: "10px"}}>
                {UserListContainers}
            </div>
        </div>
    </>
    );


function debounce(func, timeout = 500){
    let timer;
    return ()=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{func();},timeout);
        };
    }
    
    
    function fetchUsers(){
        setResultState('result-visible');
        setIconState('cancel-icon');

        console.log(displayResult);
    }

    function updateSearchStates(){
        setResultState('result-not-visible');
        setIconState('magnifying-icon');
    }
}


