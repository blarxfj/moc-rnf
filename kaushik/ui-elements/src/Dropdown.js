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
      <div style={this.props.style}>
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

  onClick = e => {
    e.preventDefault();
    this.setState({
      isClicked: !this.state.isClicked
    });
    this.button_focus.focus();
  };

  onBlur = e => {
    e.preventDefault();
    this.setState({
      isClicked: true
    });
  };

  render() {
    var Elements = [];

    var style_dropdown_element = {
      padding: 2
    };

    for (var i = 0; i < this.props.DropdownElementNames.length; i++) {
      Elements.push(
        <DropdownElement
          name={this.props.DropdownElementNames[i].name}
          link={this.props.DropdownElementNames[i].link_}
          key={i.toString()}
          style={style_dropdown_element}
        />
      );
    }
    var style_not_visible = {
      display: 'none',
      position: 'absolute',
      zIndex: 1
    };
    var style_visible = {
      position: 'absolute',
      zIndex: 1,
      backgroundColor: '#fff',
      padding: 10,
      top: -100,
      borderStyle: 'solid',
      borderWidth: 0.2,
      borderColor: '#000'
    };

    if (this.state.isClicked) {
      return (
        <div style={{ position: 'relative' }}>
          <div style={style_not_visible}>

            {Elements}
          </div>
          <button
            href=""
            onClick={this.onClick}
            onBlur={this.onBlur}
            ref={input => {
              this.button_focus = input;
            }}
          >
            Dropdown List{' '}
          </button>
        </div>
      );
    } else {
      return (
        <div style={{ position: 'relative' }}>
          <div style={style_visible}>
            {Elements}
          </div>

          <button
            href=""
            onClick={this.onClick}
            onBlur={this.onBlur}
            ref={input => {
              this.button_focus = input;
            }}
          >
            Dropdown List
          </button>
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
