import React from 'react';
import './App.css';

function Chat(props) {
  var right = "";
  var left = "";
  if(props.direction==="right"){
    right ="col s0";
    left = "col s2";
  }else{
    right = "col s2";
    left = "col s0"
  }
  return (
    <div class="row">
      <div className={left}>
      </div>
      <div className={"chat col s10 "+props.direction+" "+props.colour}>
      <strong>{props.user}: </strong>{props.message}
      </div>
      <div className={right}>
      </div>
      <br/>
    </div>
  );
}

export default Chat;