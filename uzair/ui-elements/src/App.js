import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
      visible: false
    };
  }

  update = id => {
    this.setState({
      selectedId: id
    });
  };

  dropDown = () => {
    const { visible } = this.state;
    this.setState({
      visible: visible ? false : true
    });
  };
  render() {
    const selectedId = this.state.selectedId;
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Tab
            id={1}
            selectedId={selectedId}
            update={this.update}
            tabName="Tab 1"
          />
          <Tab
            id={2}
            selectedId={selectedId}
            update={this.update}
            tabName="Tab 2"
          />
          <Tab
            id={3}
            selectedId={selectedId}
            update={this.update}
            tabName="Tab 3"
          />
          <div
            className="dropdown"
            style={{ display: 'block' }}
            onClick={this.dropDown}
          >
            DropDown▼
            <DropDownList visibility={this.state.visible} />
          </div>
        </div>
        <TabContent selectedId={selectedId} tabId={1} message="Tab 1 Active" />
        <TabContent selectedId={selectedId} tabId={2} message="Tab 2 Active" />
        <TabContent selectedId={selectedId} tabId={3} message="Tab 3 Active" />
      </div>
    );
  }
}
class DropDownList extends Component {
  render() {
    if (this.props.visibility) {
      return (
        <div>
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
class TabContent extends Component {
  render() {
    if (this.props.tabId === this.props.selectedId)
      return <div>{this.props.message}</div>;
    else {
      return <div />;
    }
  }
}

class Tab extends Component {
  onClick = () => {
    this.props.update(this.props.id);
  };

  render() {
    const style = this.props.selectedId === this.props.id
      ? { background: 'red' }
      : {};

    return (
      <div onClick={this.onClick} style={style}>
        {this.props.tabName}
      </div>
    );
  }
}

export default App;
