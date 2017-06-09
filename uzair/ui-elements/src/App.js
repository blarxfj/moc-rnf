import React, { Component } from 'react';

// import TabContainer from './TabContainer';
// import DropdownContainer from './DropdownContainer';
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
      popVisible: false
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
          onClick={() => this.setState({ popVisible: !this.state.popVisible })}
          style={{ position: 'absolute', top: '70px', zIndex: '1' }}
        >
          Popover on Right
        </button>
        <PopoverContent popVisible={this.state.popVisible} />
      </div>
    );
  }
}

class PopoverContent extends Component {
  render() {
    const infoStyle = {
      position: 'absolute',
      height: '150px',
      width: '200px',
      left: '125px',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      padding: '10px 10px',
      zIndex: '100',
      background: '#fff',
      borderRadius: '4px'
    };
    if (this.props.popVisible)
      return (
        <div style={infoStyle}>
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
