// src/App.js

import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import User from './components/User';
import Navbar from './components/Navbar';
import {Contact, About} from './components/Contact'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
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
    this.path = '';
  }

  
  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };
  clickHandler = () => {
    this.setState( { clickCount : this.state.clickCount + 1 } );
    if ((this.state.clickCount + 1) % 5 === 0) {
      this.setState({ backColor: this.colorMapper() })
    }
  };
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path={['/','/contact', '/about']}>
            <Navbar username='Melvin'></Navbar>
            <h1>React - state</h1>
            <p>Count is: {this.state.clickCount}</p>
            <button onClick={this.clickHandler}> Click me </button>
          </Route>
          <Route exact={true} path='/' component={() => ([
            <User key='1'
            id='1'
            theColor={this.state.backColor}
            firstName={this.state.userA.firstName}
            image={this.state.userA.avatarUrl}
            bootcampName={this.state.bootcamp}
            />,
            <User key='2'
            id='2'
            firstName={this.state.userB.firstName}
            image={this.state.userB.avatarUrl}
            bootcampName={this.state.bootcamp}
            />
          ])} />
             
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}
export default App;