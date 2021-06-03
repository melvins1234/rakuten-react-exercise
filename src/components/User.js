import React from "react";

function User(props) {
    console.log(props);
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName} <br />
        Welcome to {props.bootcampName}
      </h2>
      <img src={props.image} width="350" height="350"/>
    </div>
  );
}

export default User;