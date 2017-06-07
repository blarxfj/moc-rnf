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
  onMouseOverElement = () => {
    console.log('I am dropdown element');
    this.props.onMouseOverElement(this.props.key);
    console.log(this.props.key);
  };

  // onMouseOut = () => {
  //   console.log('I am dropdown element');
  //   this.props.onMouseOut();
  // };

  render() {
    const styleDropdownElement = {
      padding: '3px 20px',
      cursor: 'pointer',
      textAlign: 'left',
      whiteSpace: 'nowrap'
    };

    const hoverDropdownElement = {
      padding: '3px 20px',
      cursor: 'pointer',
      textAlign: 'left',
      whiteSpace: 'nowrap',
      backgroundColor: '#ccc'
    };

    let elementStyle = {};

    if (this.props.isHovering) {
      elementStyle = hoverDropdownElement;
    } else {
      elementStyle = styleDropdownElement;
    }
    return (
      <div style={elementStyle} onMouseOver={this.onMouseOverElement}>
        {this.props.name}
      </div>
    );
  }
}

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: true,
      isHovering: false,
      hoverElement: 0
    };
  }

  onClick = e => {
    e.preventDefault();
    this.setState({
      isClicked: !this.state.isClicked
    });
    this.button.focus();
  };

  onMouseOverElement = key => {
    this.setState({
      hoverElement: key
    });
  };

  onMouseOver = () => {
    this.setState({
      isHovering: true
    });
  };

  onMouseOut = () => {
    this.setState({
      isHovering: false
    });
  };

  onBlur = e => {
    e.preventDefault();
    this.setState({
      isClicked: true
    });
  };

  render() {
    const Elements = [];

    for (var i = 0; i < this.props.DropdownElementNames.length; i++) {
      Elements.push(
        <DropdownElement
          name={this.props.DropdownElementNames[i].name}
          link={this.props.DropdownElementNames[i].link_}
          key={i.toString()}
          onMouseOver={this.onMouseOverElement}
          isHovering={this.state.isHovering}
        />
      );
    }
    const styleNotVisible = {
      display: 'none',
      position: 'absolute',
      zIndex: 1
    };
    const styleVisible = {
      position: 'absolute',
      zIndex: 1,
      backgroundColor: '#fff',
      paddingTop: 5,
      paddingBottom: 5,
      top: 40,
      left: '45.5%',
      display: 'block',
      borderStyle: 'solid',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,.15)',
      boxShadow: '0 6px 12px rgba(0,0,0,.175)',
      marginBottom: 2
    };

    const buttonDefaultStyle = {
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#ccc',
      cursor: 'pointer'
    };

    const buttonHoverStyle = {
      backgroundColor: '#e6e6e6',
      padding: 10,
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#adadad',
      cursor: 'pointer'
    };

    let buttonStyle = {};

    if (this.state.isHovering) {
      buttonStyle = buttonHoverStyle;
    } else {
      buttonStyle = buttonDefaultStyle;
    }
    if (this.state.isClicked) {
      return (
        <div style={{ position: 'relative' }}>
          <div style={styleNotVisible}>

            {Elements}
          </div>
          <button
            onClick={this.onClick}
            onBlur={this.onBlur}
            ref={input => {
              this.button = input;
            }}
            style={buttonStyle}
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
          >
            Dropdown List{' '}
            <i className={'fa fa-caret-down'} />
          </button>
        </div>
      );
    } else {
      return (
        <div style={{ position: 'relative' }}>
          <div style={styleVisible}>
            {Elements}
          </div>

          <button
            onClick={this.onClick}
            onBlur={this.onBlur}
            ref={input => {
              this.button = input;
            }}
            style={buttonStyle}
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
          >
            Dropdown List{' '}
            <i className={'fa fa-caret-down'} />
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
