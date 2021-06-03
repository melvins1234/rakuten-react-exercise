// src/App.js

import React,{ useState, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import User from './components/User';
import Navbar from './components/Navbar';
class App extends Component{


  state = {
    userA: {
      firstName: "Shinya",
      avatarUrl: "https://www.rakuten-sec.co.jp/web/shared/images/og-image.gif"
    },
    userB: {
      firstName: "Hayato",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/440px-Rakuten_Global_Brand_Logo.svg.png"
    },
    clickCount: 0,
    backColor: 'yellow',
    bootcamp: 'Rakuten Shoken'
  };

  // const [state, setState] = useState(state);

  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };
  clickHandler = () => {
    if (this.state.clickCount % 5 === 0) {
      this.setState({ 
        backColor: this.colorMapper(),
        clickCount : this.state.clickCount + 1
      })
    }
    else {
      this.setState( { clickCount : this.state.clickCount + 1 } );
    }
  };
  render(){
    return (
      <Router>
        <div className="App">
        <Navbar username='Melvin'></Navbar>
        <h1>React - state</h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}> Click me </button>
        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
          bootcampName={this.state.bootcamp}
           />
        <User 
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
          bootcampName={this.state.bootcamp}
           />
      </div>
      </Router>
    );
  }
}
export default App;