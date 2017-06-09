import React, { Component } from 'react';

import TabContainer from './TabContainer';
import DropdownContainer from './DropdownContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div
      //   style={{
      //     display: 'flex',
      //     position: 'relative'
      //   }}
      //   id="app"
      // >
      //   <TabContainer />
      //   <DropdownContainer />
      // </div>
      <div>
        <PopoverContainer />
      </div>
    );
  }
}

class PopoverContainer extends Component {
  render() {
    return (
      <div style={{ margin: '50px', display: 'flex' }}>
        <button>Popover on Right</button>
        <PopoverContent />
      </div>
    );
  }
}

class PopoverContent extends Component {
  render() {
    return <div>Building a popover on right in React</div>;
  }
}
export default App;
