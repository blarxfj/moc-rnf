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
      visible: visible ? false : true
    });
  };
  render() {
    const selectedId = this.state.selectedId;
    return (
      <div style={{ margin: '10px' }}>
        <div
          style={{
            display: 'flex'
          }}
        >
          <TabContainer />
          <div style={{ display: 'block', position: 'relative' }}>
            <div onClick={this.dropDown}>
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
    if (this.props.visibility) {
      return (
        <div>
          <div>
            Wrap the dropdown's trigger and the dropdown menu within .dropdown, or another element that declares position: relative;. Then add the menu's HTML.May require additional positioning
            Dropdowns are automatically positioned via CSS within the normal flow of the document. This means dropdowns may be cropped by parents with certain overflow properties or appear out of bounds of the viewport. Address these issues on your own as they arise.
          </div>
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
