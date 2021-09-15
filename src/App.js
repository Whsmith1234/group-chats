import React from 'react';
import ReactDOM from 'react-dom';
import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getDatabase,ref,onValue,set } from "firebase/database";
import './App.css';
import Chat from './chat'
import Header from './Header'
const firebaseConfig = {
  apiKey: "AIzaSyDKf6FldsEdfpVQ0JCuX6IYcr5xITz8aa4",
  authDomain: "groupchat-a99c3.firebaseapp.com",
  projectId: "groupchat-a99c3",
  storageBucket: "groupchat-a99c3.appspot.com",
  messagingSenderId: "622953052570",
  appId: "1:622953052570:web:c46ee9dd8f87612d3be223"
};

// Initialize Firebase
function newMessage(){
 
 if(document.getElementById('texting').value!=null){
          var email = localStorage.getItem("email")
          var school = email.substring(email.indexOf("@")+1,email.indexOf("."));
          var group = localStorage.getItem("chat");
          var d = ref(getDatabase(),school+'/'+group+'/'+Math.floor(Date.now()/100)+'/'+localStorage.getItem("uid"));
          set(d,{
            "email" : email.substring(0,email.indexOf("@")),
            "message":document.getElementById('texting').value});
          document.getElementById('texting').value="";
      

  }
}

export function upDate(chats){
  window.scrollTo(0,document.body.scrollHeight);
  if(chats == ""){
    ReactDOM.render(
      <React.StrictMode>
     
   
      </React.StrictMode>,
      document.getElementById('chatArea')
    ); 
  }else{
  ReactDOM.render(
    <React.StrictMode>
    <ChatArea chats = {chats}/>
 
    </React.StrictMode>,
    document.getElementById('chatArea')
  );  
  }
 }
function App() {
  var email = localStorage.getItem("email")
  var school = email.substring(email.indexOf("@")+1,email.indexOf("."));
  var group = localStorage.getItem("chat");
  var d = ref(getDatabase(),school+'/'+group+'/'+Math.floor(Date.now()/100)+'/'+localStorage.getItem("uid"));
  onValue(ref(getDatabase(),school+'/'+group),(e)=>{
    //console.log(e.val());
    localStorage.setItem("message",JSON.stringify(e.val()));
    var count =0;
    var chats=[];
    var email = localStorage.getItem("email");
    for(var i =0;i<Object.keys(e.val()).length;i++){
      var message={};
      var object = e.val()[Object.keys(e.val())[i]];
      //console.log(object);
      for(var j =0;j<Object.keys(object).length;j++){
        message.user = object[Object.keys(object)[j]].email;
       // console.log(object[Object.keys(object)[j]].message);
        message.message = object[Object.keys(object)[j]].message;
        if(message.user===email.substring(0,email.indexOf("@"))){
          message.direction= "right";
        }else{
          message.direction= "left";
        }
        chats[count]=message;
        count++;
      }
    }
    upDate(chats);
  });
  return (
    <div>
      
        
      
        <div class = "chatArea">
          <div class="row chat-window">
            <div class="col s10">
              <input type="text" class="left white-text" id="texting" />
            </div>
          <button class="left col s2 btn" onClick={(e)=>{
            e.preventDefault();
            newMessage();
          }}>Send</button>
          </div>
        </div>
     </div>


  );
}
function ChatArea(props){
  var renderChats=[];
  var messages = JSON.parse(localStorage.getItem("messages"));
  console.log(messages);
  var chats = [];
  chats=props.chats;
  
  console.log(chats);
  for(var i =0;i<chats.length;i++){
   renderChats[i]= <Chat message = {chats[i].message} direction = {chats[i].direction} user = {chats[i].user}/>
  }
  return(
    renderChats
  );
}
export default App;
