import React, { Component } from 'react';

class DropdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  onClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };
  render() {
    return (
      <div
        style={{
          display: 'block',
          position: 'absolute',
          zIndex: '2',
          left: '140px',
          cursor: 'pointer'
        }}
      >
        <DropdownTrigger onSelect={() => this.onClick()} />
        <DropdownItems visible={this.state.isClicked} />
      </div>
    );
  }
}

class DropdownTrigger extends Component {
  render() {
    return (
      <div onClick={this.props.onSelect} id="item-bar">Dropdown Menu▼</div>
    );
  }
}

class DropdownItems extends Component {
  render() {
    if (this.props.visible) {
      return (
        <div>
          <div id="item-bar">DropdownItems</div>
          <div id="item-bar">DropdownItems</div>
          <div id="item-bar">DropdownItems</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DropdownContainer;
