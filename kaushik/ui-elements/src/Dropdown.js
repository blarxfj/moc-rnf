import React, { Component } from 'react';

const dropdownElementNames = [
  {
    name: 'Dropdown',
    link_: '#1'
  },
  {
    name: 'Dropdown1',
    link_: '#2'
  },
  {
    name: 'Dropdown2',
    link_: '#3'
  },
  {
    name: 'Dropdown3',
    link_: '#4'
  }
];

class DropdownElement extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: true
    };
  }

  onClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    var Elements = [];

    for (var i = 0; i < this.props.DropdownElementNames.length; i++) {
      Elements.push(
        <DropdownElement
          name={this.props.DropdownElementNames[i].name}
          link={this.props.DropdownElementNames[i].link_}
          key={i.toString()}
        />
      );
    }
    var style_not_visible = {
      display: 'none',
      position: 'absolute',
      zIndex: 1,
      backgroundColor: '#fff',
      padding: 30
    };
    var style_visible = {
      position: 'absolute',
      zIndex: 1,
      backgroundColor: '#fff',
      padding: 15,
      top: -90
    };

    if (this.state.isClicked) {
      return (
        <div style={{ position: 'relative' }}>
          <div style={style_not_visible}>
            {Elements}
          </div>
          <h3 onClick={this.onClick}>
            Dropdown List{' '}
          </h3>
        </div>
      );
    } else {
      return (
        <div style={{ position: 'relative' }}>
          <div style={style_visible}>
            {Elements}
          </div>
          <h3 onClick={this.onClick}>
            Dropdown List
          </h3>
        </div>
      );
    }
  }
}

class ParentDropdown extends Component {
  render() {
    return <Dropdown DropdownElementNames={dropdownElementNames} />;
  }
}

export default ParentDropdown;
