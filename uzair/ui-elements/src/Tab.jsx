import React, { Component } from 'react';

class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0
    };
  }

  onClick = id => {
    if (this.state.selectedId !== id) {
      this.setState({
        selectedId: id
      });
    } else {
      this.setState({
        selectedId: 0
      });
    }
  };

  render() {
    return (
      <div
        style={{
          display: 'block',
          position: 'absolute',
          zIndex: '50'
        }}
      >
        <div style={{ display: 'flex' }}>
          <Tab
            className="Tab-bar"
            id={1}
            onSelect={() => this.onClick(1)}
            tabName="Tab 1"
            selectedId={this.state.selectedId}
          />
          <Tab
            className="Tab-bar"
            id={2}
            onSelect={() => this.onClick(2)}
            tabName="Tab 2"
            selectedId={this.state.selectedId}
          />
          <Tab
            className="Tab-bar"
            id={3}
            onSelect={() => this.onClick(3)}
            tabName="Tab 3"
            selectedId={this.state.selectedId}
          />
        </div>
        <div style={{ paddingTop: '10px' }}>
          <TabContent
            tabId={1}
            message="Tab 1 Active"
            selectedId={this.state.selectedId}
          />
          <TabContent
            tabId={2}
            message="Tab 2 Active.Wrap the dropdown's trigger and the dropdown menu within .dropdown, or another element that declares position: relative;. Then add the menu's HTML.May require additional positioning
            Dropdowns are automatically positioned via CSS within the normal flow of the document. This means dropdowns may be cropped by parents with certain overflow properties or appear out of bounds of the viewport. Address these issues on your own as they arise."
            selectedId={this.state.selectedId}
          />
          <TabContent
            tabId={3}
            message="Tab 3 Active"
            selectedId={this.state.selectedId}
          />
        </div>
      </div>
    );
  }
}

class Tab extends Component {
  render() {
    const style = this.props.selectedId === this.props.id
      ? { background: 'red' }
      : {};

    return (
      <div onClick={this.props.onSelect} style={style}>
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
