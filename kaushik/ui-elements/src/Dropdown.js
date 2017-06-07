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
      <div className={'dropdownElements'}>
        {this.props.name}
      </div>
    );
  }
}

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      isHovering: false,
      isBodyClicked: true
    };
  }

  onClick = e => {
    this.setState({
      isClicked: !this.state.isClicked,
      isBodyClicked: false
    });

    this.button.focus();
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

  // onBlur = e => {
  //   e.preventDefault();
  //   if (e.currentTarget === null) {
  //     // do your thing.
  //     // console.log(e.currentTarget + ' current target');
  //     // console.log(e.relatedTarget + ' related target');
  //     console.log(e);
  //     this.setState({
  //       isClicked: !this.state.isClicked
  //     });
  //   }
  // };
  dropdownButtonHandler = e => {
    // console.log(e.target.id);
    console.log(this.state.isClicked + ' is clicked');
    console.log(this.state.isBodyClicked + ' is body clicked');
    if (e.target.id !== 'dropdownButton') {
      this.setState({
        isBodyClicked: true
      });
    }
    // else {
    //   this.setState({
    //     isBodyClicked: false,
    //     isClicked: !this.state.isClicked
    //   });
    // }
  };

  componentDidMount() {
    document.body.addEventListener('click', this.dropdownButtonHandler);
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.dropdownButtonHandler);
  }

  render() {
    const Elements = [];

    for (var i = 0; i < this.props.DropdownElementNames.length; i++) {
      Elements.push(
        <DropdownElement
          name={this.props.DropdownElementNames[i].name}
          link={this.props.DropdownElementNames[i].link_}
          key={i.toString()}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
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
      left: '46.5%',
      display: 'inline-block',
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

    if (this.state.isHovering || !this.state.isClicked) {
      buttonStyle = buttonHoverStyle;
    } else {
      buttonStyle = buttonDefaultStyle;
    }
    if (this.state.isClicked && !this.state.isBodyClicked) {
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
            id="dropdownButton"
          >
            Dropdown{' '}
            <i className={'fa fa-caret-down'} />
          </button>
        </div>
      );
    } else {
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
            id="dropdownButton"
          >
            Dropdown{' '}
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
