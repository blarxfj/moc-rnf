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

  onBlur = e => {
    console.log(e.target.id);
    if (e.target.id !== 'dropdownButton') {
      this.setState({
        isBodyClicked: true
      });
    } else {
      // console.log(e.target.id);
      this.setState({
        isBodyClicked: false
      });
    }
  };
  // dropdownButtonHandler = e => {
  //   // console.log(e.target.id);
  //   console.log(this.state.isClicked + ' is clicked');
  //   console.log(this.state.isBodyClicked + ' is body clicked');
  //   if (e.target.id !== 'dropdownButton') {
  //     this.setState({
  //       isBodyClicked: true
  //     });
  //   }
  //   // else {
  //   //   this.setState({
  //   //     isClicked: true
  //   //   });
  //   // }
  // };
  //
  // componentDidMount() {
  //   document.body.addEventListener('click', this.dropdownButtonHandler);
  // }
  // componentWillUnmount() {
  //   document.body.removeEventListener('click', this.dropdownButtonHandler);
  // }

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
      left: '46.5%',
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
            onBlur={this.onBlur}
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
            onBlur={this.onBlur}
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
