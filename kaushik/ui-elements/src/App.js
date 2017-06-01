import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class tabs extends Component{
  render(){
    return (
      <li><a>{this.props.title}</a></li>
    );
  }
}


class ulContainer extends Component{

  render(){
    return (
      <ul>
        <tabs title='Tab'/>
        <tabs title='Tab1'/>
        <tabs title='Tab2'/>
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ulContainer />
      </div>
    );
  }
}

export default App;
