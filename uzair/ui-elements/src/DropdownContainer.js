import React, { Component } from 'react';

class DropdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isExpanded: false
    };
  }

  onClick = () => {
    this.setState({
      isClicked: true,
      isExpanded: !this.state.isExpanded
    });
  };

  handleBodyClick = e => {
    console.log('handleBodyClick', e.target.id);
    if (e.target.id !== 'trigger') {
      this.setState({ isExpanded: false, isClicked: false });
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.handleBodyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleBodyClick);
  }

  render() {
    const dropdownContainerStyle = {
      display: 'block',
      position: 'absolute',
      left: '202px',
      backgroundColor: '#fff'
    };
    return (
      <div style={dropdownContainerStyle} id="dropdown">
        <DropdownTrigger
          isExpanded={this.state.isExpanded}
          isClicked={this.state.isClicked}
          onSelect={() => this.onClick()}
        />
        <DropdownItems
          isExpanded={this.state.isExpanded}
          visible={this.state.isClicked}
        />
      </div>
    );
  }
}

class DropdownTrigger extends Component {
  render() {
    let triggerStyle = this.props.isClicked && this.props.isExpanded
      ? {
          backgroundColor: '#EEEEEE',
          width: '78px',
          cursor: 'pointer',
          display: 'flex',
          wordWrap: 'breakWord',
          justifyContent: 'center',
          paddingTop: '10.5px'
        }
      : { cursor: 'pointer', justifyContent: 'center', width: '78px' };
    let caretStyle = this.props.isClicked && this.props.isExpanded
      ? {}
      : { paddingTop: '12px' };
    return (
      <div>
        <div onClick={this.props.onSelect} style={triggerStyle} id="trigger">
          Dropdown&nbsp;
          <i className="fa fa-caret-down" style={caretStyle} />
        </div>
      </div>
    );
  }
}
class DropdownItems extends Component {
  render() {
    const itemContent = ['Action', 'Another action', 'Something else here'];
    const itemStyle = {
      margin: '4px 0px',
      paddingLeft: '15px',
      verticalAlign: 'middle',
      paddingTop: '4px',
      paddingBottom: '4px'
    };
    const divItemStyle = {
      border: '1px solid rgba(0,0,0,.15)',
      borderRadius: '4px',
      width: '170px',
      color: '#333',
      cursor: 'pointer',
      fontFamily: 'Arial',
      marginTop: '3px',
      boxShadow: '0 6px 12px rgba(0,0,0,.175)'
    };
    if (this.props.visible && this.props.isExpanded) {
      return (
        <div id="menu" style={divItemStyle}>
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
