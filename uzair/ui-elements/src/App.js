import React, { Component } from 'react';
import TabContainer from './TabContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <TabContainer /> */}
        <DropdownContainer />
      </div>
    );
  }
}

class DropdownContainer extends Component {
  render() {
    return (
      <div style={{ display: 'block' }}>
        <DropdownTrigger />
        <DropdownItems />
      </div>
    );
  }
}

class DropdownTrigger extends Component {
  render() {
    return <div>Dropdown Menu▼</div>;
  }
}

class DropdownItems extends Component {
  render() {
    return (
      <div>
        <div>DropdownItems</div>
        <div>DropdownItems</div>
        <div>DropdownItems</div>
      </div>
    );
  }
}
export default App;
