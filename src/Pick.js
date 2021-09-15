import React from 'react';
import './App.css';
import {route,getChats} from './index'
function Pick() {

  return (
    <div>
    <div class = "row">
      <div class = "col s1 m3 l3 xl4"> </div>
        <div class="col s10 m6 l6 xl4">
          <div class="SignIn card">
          <div class="card-content white-text">
            <span class="card-title">Pick Your Course  <a href ="#" onClick={(e)=>{
            e.preventDefault();
            localStorage.setItem("chat",prompt("What would you like to call the chat?"));
            route("app");
        }}>New</a></span>
            <Chats/>
          </div>
        </div>
        <div class = "col s1 m3 l3 xl4"> </div>
      </div>
    </div>
    </div>
  );
}
function Chats(){
    
    var chats=sessionStorage.getItem("groups").split(",");
    console.log(chats);
    var renderChats=[];
    for(var i =0;i<chats.length;i++){
        renderChats[i] = <Chat message = {chats[i]}/>
    }
    return(renderChats);
}
function Chat(props){
    return(
        <p>
        <a href ="#" onClick={(e)=>{
            e.preventDefault();
            localStorage.setItem("chat",props.message);
            route("app");
        }}>{props.message}</a>
        </p>
    );
}
export default Pick;