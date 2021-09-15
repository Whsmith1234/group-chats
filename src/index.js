import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pick from './Pick'
import Header from './Header';
import SignIn from'./SignIn';
import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getDatabase,ref,get,set, onValue } from "firebase/database";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
/*


Initialize Firebase


*/
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKf6FldsEdfpVQ0JCuX6IYcr5xITz8aa4",
  authDomain: "groupchat-a99c3.firebaseapp.com",
  projectId: "groupchat-a99c3",
  storageBucket: "groupchat-a99c3.appspot.com",
  messagingSenderId: "622953052570",
  appId: "1:622953052570:web:c46ee9dd8f87612d3be223"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
console.log(auth);
export function logOut(){
  signOut(auth);
  route("signIn");
}
export function signIn(email,password){
  signInWithEmailAndPassword(auth,email,password);
}
export function signUp(email,password){
  createUserWithEmailAndPassword(auth,email,password);
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("uid",user.uid)
    localStorage.setItem("email",user.email);
    if(localStorage.getItem("chat")){
      route("app");
    }else{
      console.log("hey");
      route("Pick a group");
    }
    console.log(user);
    
  } else {
    route("signIn");
  }
});
/*


Routes Woohoooooooo


*/
export function route(page){
  switch(page){
    case "Pick a group":
      /**
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       */
       var email = localStorage.getItem("email")
       var school = email.substring(email.indexOf("@")+1,email.indexOf("."))
       console.log(school);
       var chatRef = ref(getDatabase(),school);
       get(chatRef).then((snapshot) => {
         if (snapshot.exists()) {
           sessionStorage.setItem("groups",(Object.keys(snapshot.val())));
         } else {
           sessionStorage.setItem("groups",["Main"]);
           console.log("No data available");
         }
       }).catch((error) => {
         console.error(error);
       }).then(()=>{
        ReactDOM.render(
          <React.StrictMode>
        
          <div class="container">
            <Header page="app"/>
            <Pick/>
          </div>
       
          </React.StrictMode>,
          document.getElementById('root')
        );  
       });
      /*
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       */
      
      /**
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       * 
       */
    break;
    case "signIn":
      ReactDOM.render(
      <React.StrictMode>
    
      <div class="container">
        <Header page="signIn"/>
        <SignIn/>
      </div>
   
      </React.StrictMode>,
      document.getElementById('root')
    );  
    break;
    case "app":
      ReactDOM.render(
      <React.StrictMode>
      <div class="container">
        <Header page="app"/>
        <App/>
      </div>
      </React.StrictMode>,
      document.getElementById('root')
    );  
    break;
    }
 }
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
ReactDOM.render(
  <React.StrictMode>
    <div class = "container">
    <Header/>
    <SignIn/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

