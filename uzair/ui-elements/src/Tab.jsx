import React, { Component } from 'react';

class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0
    };
  }
  render() {
    return (
      <div style={{ display: 'block' }}>
        <div style={{ display: 'flex' }}>
          <Tab id={1} tabName="Tab 1" selectedId={this.state.selectedId} />
          <Tab id={2} tabName="Tab 2" selectedId={this.state.selectedId} />
          <Tab id={3} tabName="Tab 3" selectedId={this.state.selectedId} />
        </div>
        <TabContent
          tabId={1}
          message="Tab 1 Active"
          selectedId={this.state.selectedId}
        />
        <TabContent
          tabId={2}
          message="Tab 2 Active"
          selectedId={this.state.selectedId}
        />
        <TabContent
          tabId={3}
          message="Tab 3 Active"
          selectedId={this.state.selectedId}
        />
      </div>
    );
  }
}

class Tab extends Component {
  onClick = () => {
    this.update(this.props.id);
  };

  update = id => {
    // this.setState({
    //   selectedId: id
    // });
  };

  render() {
    const style = this.props.selectedId === this.props.id
      ? { background: 'red' }
      : {};

    return (
      <div onClick={this.onClick} style={style}>
        {this.props.tabName}
      </div>
    );
  }
}

class TabContent extends Component {
  render() {
    if (this.props.tabId === this.props.selectedId)
      return <div>{this.props.message}</div>;
    else {
      return <div />;
    }
  }
}

export default TabContainer;
