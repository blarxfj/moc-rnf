import React, { Component } from 'react';

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

    if (this.state.isClicked) {
      var style_not_visible = { display: 'none' };
      var style_visible = { display: 'block' };
      return (
        <div>
          <div style={style_not_visible}>
            {Elements}
          </div>
          <h3 onClick={this.onClick}>Dropdown List </h3>
        </div>
      );
    } else {
      return (
        <div>
          <div style={style_visible}>
            {Elements}
          </div>
          <h3 onClick={this.onClick}>Dropdown List</h3>
        </div>
      );
    }
  }
}

export default Dropdown;
