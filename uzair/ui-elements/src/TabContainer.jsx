import React, { Component } from 'react';

class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      displayMessage: ''
    };
  }

  update = (id, tabInfo) => {
    if (this.state.selectedTab === id) {
      this.setState({
        selectedTab: 0,
        displayMessage: ''
      });
    } else {
      this.setState({
        selectedTab: id,
        displayMessage: tabInfo[id - 1]
      });
    }
  };

  render() {
    const tabInfo = [
      'Tab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is ActiveTab 1 is Active',
      'Tab 2 is Active',
      'Tab 3 is Active'
    ];
    return (
      <div
        style={{
          backgroundColor: 'green',
          position: 'absolute',
          zIndex: '1',
          width: '500',
          height: '500'
        }}
      >
        <div style={{ display: 'flex', cursor: 'pointer' }}>
          <Tab
            id={1}
            name="Tab 1"
            selectedTab={this.state}
            onSelect={() => this.update(1, tabInfo)}
          />
          <Tab
            id={2}
            name="Tab 2"
            selectedTab={this.state}
            onSelect={() => this.update(2, tabInfo)}
          />
          <Tab
            id={3}
            name="Tab 3"
            selectedTab={this.state}
            onSelect={() => this.update(3, tabInfo)}
          />
        </div>
        <TabContent message={this.state.displayMessage} />
      </div>
    );
  }
}

class Tab extends Component {
  render() {
    return (
      <div style={{ marginRight: '4px' }} onClick={this.props.onSelect}>
        {this.props.name}
      </div>
    );
  }
}

class TabContent extends Component {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

export default TabContainer;
