import React, { Component } from 'react';

//------------------------ UlContainer ----------------------------

class TabContent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.data_tabcontent.content}</p>
      </div>
    );
  }
}

class Tab extends Component {
  onClick = () => {
    this.props.onClick(this.props.ele_id);
  };

  render() {
    const style_selected = { backgroundColor: 'red', padding: 20 };
    const style_not_selected = { backgroundColor: 'blue', padding: 20 };
    if (this.props.idNumber === this.props.ele_id) {
      return (
        <div style={style_selected} onClick={this.onClick}>
          {this.props.title}
        </div>
      );
    } else {
      return (
        <div style={style_not_selected} onClick={this.onClick}>
          {this.props.title}
        </div>
      );
    }
  }
}

class UlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    };
  }

  onClick = id => {
    this.setState({ id: id });
  };

  render() {
    const tabs = [];
    for (let i = 0; i < this.props.data.length; i++) {
      tabs.push(
        <Tab
          title={this.props.data[i].title}
          key={i}
          onClick={this.onClick}
          ele_id={i}
          idNumber={this.state.id}
        />
      );
    }

    return (
      <div>
        <div style={{ display: 'flex' }}>
          {tabs}
        </div>
        <TabContent
          id={this.state.id}
          data_tabcontent={this.props.data[this.state.id]}
        />
      </div>
    );
  }
}

//------------------------ UlContainer ----------------------------

export default UlContainer;
