import React from 'react';
import './App.css';
import {signIn,signUp} from './index'
function SignIn() {

  return (
    <div>
    <div class = "row">
      <div class = "col s1 m3 l3 xl4"> </div>
        <div class="col s10 m6 l6 xl4">
          <div class="SignIn card">
          <div class="card-content white-text">
            <span class="card-title">Sign In / Sign Up</span>
            <p>Make sure to use your school email as that is how your school is determined</p>
            <input class = "white-text" placeholder = "email" type = "email" id = "email"></input>
            <input class = "white-text" placeholder = "password" type = "password" id = "password"></input>
          </div>
          <div class="card-action">
            <a onClick = {(e)=>{
              e.preventDefault();
              signIn(document.getElementById('email').value,document.getElementById('password').value);
            }} href="#">Sign In</a>
            <a onClick = {(e)=>{
              e.preventDefault();
              signUp(document.getElementById('email').value,document.getElementById('password').value);
            }} href="#">Sign Up</a>
          </div>
        </div>
        <div class = "col s1 m3 l3 xl4"> </div>
      </div>
    </div>
    </div>
  );
}

export default SignIn;