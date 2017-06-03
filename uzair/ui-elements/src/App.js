import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TabContainer />
      </div>
    );
  }
}

class TabContainer extends Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Tab />
          <Tab />
          <Tab />
        </div>
        <TabContent />
      </div>
    );
  }
}

class Tab extends Component {
  render() {
    return (
      <div>
        Tab Number
      </div>
    );
  }
}

class TabContent extends Component {
  render() {
    return (
      <div>
        This is TabContent Container
      </div>
    );
  }
}
export default App;
