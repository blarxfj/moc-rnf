import React, { Component } from 'react';

// import TabContainer from './TabContainer';
// import DropdownContainer from './DropdownContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div>
      //   <div
      //     style={{
      //       display: 'flex',
      //       position: 'relative'
      //     }}
      //     id="app"
      //   >
      //     <TabContainer />
      //     <DropdownContainer />
      //   </div>
      <div>
        <PopoverContainer />
      </div>
      // </div>
    );
  }
}

class PopoverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popVisible: false
    };
  }

  componentDidMount() {
    let btnEle = document.getElementById('pop-btn');
    console.log(btnEle.getBoundingClientRect());
  }

  render() {
    const popContainerStyle = {
      margin: '50px',
      position: 'relative'
    };

    const triggerStyle = {
      position: 'absolute',
      top: '120px',
      zIndex: '1'
    };

    const content =
      'Building a popover on right in React.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.';

    return (
      <div style={popContainerStyle}>
        <PopoverContent content={content} popVisible={this.state.popVisible} />
        <button
          id="pop-btn"
          onClick={() => this.setState({ popVisible: !this.state.popVisible })}
          style={triggerStyle}
        >
          Popover on Right
        </button>

      </div>
    );
  }
}

class PopoverContent extends Component {
  // componentDidUpdate() {
  //   console.log(this.refs.content.getBoundingClientRect());
  // }

  render() {
    const infoStyle = {
      position: 'absolute',
      width: '200px',
      top: '60px',
      left: '125px',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      padding: '10px 10px',
      zIndex: '100',
      background: '#fff',
      borderRadius: '4px'
    };
    if (this.props.popVisible)
      return (
        <div ref="content" id="content-id" style={infoStyle}>
          {this.props.content}
        </div>
      );
    else return <div />;
  }
}
export default App;
