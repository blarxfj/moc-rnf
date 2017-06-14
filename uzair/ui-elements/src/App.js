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
        <PopoverContainer
          buttonMarginTop={100}
          buttonMarginLeft={210}
          direction="RIGHT"
        />
        {/* <PopoverContainer buttonPosLeft={300} direction="LEFT" /> */}
      </div>
      // </div>
    );
  }
}

class PopoverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popVisible: false,
      width: null
    };
  }

  componentDidMount() {
    let btnEle = document.getElementById('pop-btn');
    let position = btnEle.getBoundingClientRect();
    console.log('position of button', position);
    this.setState({
      width: position.width
    });
  }

  render() {
    console.log(this.state);
    const popContainerStyle = {
      margin: '50px',
      position: 'relative',
      border: '1px solid #000'
    };

    const triggerStyle = {
      zIndex: '1',
      marginTop: this.props.buttonMarginTop,
      marginLeft: this.props.buttonMarginLeft
    };

    const content =
      'Building a popover on right in React.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.';

    return (
      <div style={popContainerStyle}>
        <button
          id="pop-btn"
          onClick={() => this.setState({ popVisible: !this.state.popVisible })}
          style={triggerStyle}
        >
          Popover on {this.props.direction}
        </button>
        <PopoverContent
          direction={this.props.direction}
          buttonMarginLeft={this.props.buttonMarginLeft}
          width={this.state.width}
          content={content}
          popVisible={this.state.popVisible}
        />

      </div>
    );
  }
}

class PopoverContent extends Component {
  render() {
    let top = null;
    let left = null;

    switch (this.props.direction) {
      case 'RIGHT':
        top = 0;
        left = this.props.width + this.props.buttonMarginLeft + 10;
        break;
      case 'LEFT':
        top = this.props.positionTop - 110;
        left = this.props.positionLeft - 10;
        break;
      default:
        break;
    }

    console.log('top', top, 'left', left);
    console.log('this.props', this.props);

    const infoStyle = {
      position: 'absolute',
      width: '200px',
      top: top,
      left: left,
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
