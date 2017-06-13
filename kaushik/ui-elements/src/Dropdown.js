import React, { Component } from 'react';

const dropdownElementNames = [
  {
    name: 'Action',
    link_: '#1'
  },
  {
    name: 'Another Action',
    link_: '#2'
  },
  {
    name: 'Something else here',
    link_: '#3'
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
      isBodyClicked: true
    };
  }

  onClick = e => {
    this.setState({
      isClicked: !this.state.isClicked,
      isBodyClicked: false
    });
  };

  dropdownButtonHandler = e => {
    if (e.target.id !== 'dropdownButton') {
      this.setState({
        isBodyClicked: true,
        isClicked: false
      });
    } else {
      this.setState({
        isBodyClicked: false
      });
    }
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
      left: '47%',
      display: 'inline-block',
      borderStyle: 'solid',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,.15)',
      boxShadow: '0 6px 12px rgba(0,0,0,.175)',
      marginBottom: 2
    };

    if (this.state.isClicked && !this.state.isBodyClicked) {
      return (
        <div style={{ position: 'relative' }}>
          <div style={styleVisible}>
            {Elements}
          </div>

          <button
            onClick={this.onClick}
            ref={input => {
              this.button = input;
            }}
            className={'dropdownButton'}
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
            ref={input => {
              this.button = input;
            }}
            className={'dropdownButton'}
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
