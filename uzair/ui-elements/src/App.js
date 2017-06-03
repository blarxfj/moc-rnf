import React, { Component } from 'react';

import TabContainer from './TabContainer';
import DropdownContainer from './DropdownContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TabContainer />
        <DropdownContainer />
      </div>
    );
  }
}

export default App;
