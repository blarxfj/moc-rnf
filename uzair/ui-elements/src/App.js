import React, { Component } from 'react';
import './App.css';
import TabContainer from './Tab';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  dropDown = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    });
  };
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            marginLeft: '10px'
          }}
        >
          <TabContainer />
          <div
            style={{
              display: 'block',
              position: 'relative',
              zIndex: '100'
            }}
          >
            <div onClick={this.dropDown} style={{ marginLeft: '120px' }}>
              DropDown▼
            </div>
            <DropDownList visibility={this.state.visible} />
          </div>
        </div>
      </div>
    );
  }
}
class DropDownList extends Component {
  render() {
    const listStyle = {
      width: '100px',
      borderRadius: '3px',
      border: '1px solid #000',
      marginLeft: '120px',
      position: 'absolute'
    };
    if (this.props.visibility) {
      return (
        <div style={listStyle}>
          <div>New</div>
          <div>Open</div>
          <div>Save</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default App;
