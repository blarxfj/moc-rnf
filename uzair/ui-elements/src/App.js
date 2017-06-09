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
      <div
        style={{
          margin: '50px',
          position: 'relative'
        }}
      >
        <button
          onClick={() => this.setState({ isVisible: !this.state.isVisible })}
          style={{ position: 'absolute', top: '70px' }}
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
      return (
        <div
          style={{
            position: 'absolute',
            left: '125px',
            height: '150px',
            width: '200px',
            border: '1px solid #000',
            padding: '10px 10px'
          }}
        >
          Building a popover on right in React.Franklin Delano Roosevelt,
          commonly known as FDR, was an American statesman and political leader
          who served as the 32nd President of the United States from 1933 until
          his death in 1945.
        </div>
      );
    else return <div />;
  }
}
export default App;
