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
          left: '180px',
          cursor: 'pointer',
          backgroundColor: '#fff'
        }}
      >
        <DropdownTrigger
          isClicked={this.state.isClicked}
          onSelect={() => this.onClick()}
        />
        <DropdownItems visible={this.state.isClicked} />
      </div>
    );
  }
}

class DropdownTrigger extends Component {
  render() {
    const triggerStyle = this.props.isClicked
      ? { backgroundColor: '#EEEEEE', width: '86.5px', display: 'flex' }
      : {};
    return (
      <div>
        <div onClick={this.props.onSelect} style={triggerStyle} id="item-bar">
          Dropdown&nbsp;
          <i className="fa fa-caret-down" />
        </div>

      </div>
    );
  }
}

class DropdownItems extends Component {
  render() {
    const itemContent = ['Action', 'Another Action', 'Something Else here'];
    const itemStyle = {
      marginLeft: '0px',
      marginTop: '6px',
      marginRight: '0px',
      marginBottom: '6px',
      paddingLeft: '10px'
    };
    if (this.props.visible) {
      return (
        <div
          style={{
            border: '1px solid #DCDCDC',
            borderRadius: '2px',
            width: '140px',
            fontSize: '13px',
            color: '#333',
            fontFamily: 'Arial'
          }}
        >
          {itemContent.map((value, key) => {
            return (
              <div key={key} id="item-style" style={itemStyle}>{value}</div>
            );
          })}
          <hr />
          <div id="item-style" style={itemStyle}>Separated Link 1</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DropdownContainer;
