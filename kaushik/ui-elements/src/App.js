import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UlContainer from './Tabs';
import Dropdown from './Dropdown';

var ulContainerData = [
  {
    title: 'Tab1',
    content: 'This is a paragraph 1',
    id: 1
  },
  {
    title: 'Tab2',
    content: 'This is a paragraph 2',
    id: 2
  },
  {
    title: 'Tab3',
    content: 'This is a paragraph 3',
    id: 3
  }
];

var dropdownElementNames = [
  {
    name: 'Dropdown',
    link_: '#1'
  },
  {
    name: 'Dropdown1',
    link_: '#2'
  },
  {
    name: 'Dropdown2',
    link_: '#3'
  },
  {
    name: 'Dropdown3',
    link_: '#4'
  }
];

//------------------------ Dropdown ----------------------------

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
        <Dropdown DropdownElementNames={dropdownElementNames} />
        <UlContainer data={ulContainerData} />
      </div>
    );
  }
}

export default App;
