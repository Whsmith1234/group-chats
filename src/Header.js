import React from 'react';
import './App.css';
import {logOut} from './index';
import {upDate} from './App'
function Header(props) {
    var logo="";
    var logo2="";
    var logOutLink="logOut right";
    if(props.page==='app'){
      logo="logo";
      logo2="m10"; 
    }else{
      logo = "logo2";
      
      logOutLink="right hide";
    }
  return (
    <div class="row">
        
                <h4 class={"col s12 "+logo2}>
                <a class = {logo} href="">
                University Group Chats
                </a></h4><a class = {"col s12 m2 "+logOutLink} onClick={(e)=>{
                    e.preventDefault();
                    localStorage.clear();
                    upDate("");
                    logOut();
                }} href="">
                Sign Out
                </a><br/>
                <br/>
                
       
    </div>
  );
}

export default Header;