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
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  render() {
    return (
      <div style={{ margin: '50px', display: 'flex' }}>
        <button
          onClick={() => this.setState({ isVisible: !this.state.isVisible })}
        >
          Popover on Right
        </button>
        <PopoverContent isVisible={this.state.isVisible} />
      </div>
    );
  }
}

class PopoverContent extends Component {
  render() {
    if (this.props.isVisible)
      return <div>Building a popover on right in React</div>;
    else return <div />;
  }
}
export default App;
