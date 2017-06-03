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
          left: '155px',
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
    const itemContent = ['New', 'Open', 'Save', 'Exit'];
    const itemStyle = {
      marginLeft: '4px',
      marginTop: '4px',
      marginRight: '4px',
      marginBottom: '4px'
    };
    if (this.props.visible) {
      return (
        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #000',
            borderRadius: '2px',
            width: '140px'
          }}
        >
          {itemContent.map((value, key) => {
            return (
              <div key={key} id="item-style" style={itemStyle}>{value}</div>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DropdownContainer;
