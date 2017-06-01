import React, { Component } from 'react';

class Tabs extends Component {
  render() {
    return (
      <div onClick={() => this.props.onClick(this.props.message)}>
        {this.props.children}
      </div>
    );
  }
}

export default Tabs;
