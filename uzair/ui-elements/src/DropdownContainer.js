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

  handleBodyClick = () => {
    this.setState({ isClicked: false });
  };

  componentDidMount() {
    document
      .getElementById('root')
      .parentElement.parentElement.addEventListener(
        'click',
        this.handleBodyClick
      );
  }

  componentWillUnmount() {
    document
      .getElementById('root')
      .parentElement.parentElement.removeEventListener(
        'click',
        this.handleBodyClick
      );
  }

  render() {
    return (
      <div
        style={{
          display: 'block',
          position: 'absolute',
          left: '180px',
          backgroundColor: '#fff'
        }}
        id="dropdown"
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
    let triggerStyle = this.props.isClicked
      ? {
          backgroundColor: '#EEEEEE',
          width: '86.5px',
          cursor: 'pointer',
          display: 'flex'
        }
      : { cursor: 'pointer' };
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
    const itemContent = ['Action', 'Another action', 'Something else here'];
    const itemStyle = {
      marginLeft: '0px',
      marginTop: '4px',
      marginRight: '0px',
      marginBottom: '4px',
      paddingLeft: '15px',
      verticalAlign: 'middle',
      paddingTop: '4px',
      paddingBottom: '4px'
    };
    if (this.props.visible) {
      return (
        <div
          id="menu"
          style={{
            border: '1px solid #e5e5e5',
            borderRadius: '2px',
            width: '170px',
            color: '#333',
            cursor: 'pointer',
            fontFamily: 'Arial'
          }}
        >
          {itemContent.map((value, key) => {
            return (
              <div key={key} id="item-style" style={itemStyle}>{value}</div>
            );
          })}
          <hr />
          <div id="item-style" style={itemStyle}>Separated link</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DropdownContainer;
