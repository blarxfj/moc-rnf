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
      <div style={{ display: 'flex' }}>
        <PopoverContainer
          id="1"
          content="If only Bradley's arm was longer. Best photo ever. #oscars pic.twitter.com/C9U5NOtGap"
          buttonMarginTop={100}
          buttonMarginLeft={20}
          direction="RIGHT"
        />
        <PopoverContainer
          id="2"
          content="To all the little girls watching...never doubt that you are valuable and powerful & deserving of every chance & opportunity in the world."
          buttonMarginTop={50}
          buttonMarginLeft={10}
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
      buttonWidth: null,
      buttonHeight: null
    };
  }

  componentDidMount() {
    let btnEle = document.getElementById('pop-btn');
    let position = btnEle.getBoundingClientRect();

    this.setState({
      buttonWidth: position.width,
      buttonHeight: position.height
    });
  }

  render() {
    const popContainerStyle = {
      position: 'relative'
    };

    const triggerStyle = {
      zIndex: '1',
      marginTop: this.props.buttonMarginTop,
      marginLeft: this.props.buttonMarginLeft
    };

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
          id={this.props.id}
          direction={this.props.direction}
          buttonMarginLeft={this.props.buttonMarginLeft}
          buttonMarginTop={this.props.buttonMarginTop}
          buttonWidth={this.state.buttonWidth}
          buttonHeight={this.state.buttonHeight}
          contentHeight={this.state.contentHeight}
          content={this.props.content}
          popVisible={this.state.popVisible}
        />

      </div>
    );
  }
}

class PopoverContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0
    };
  }
  componentWillUpdate() {
    let contentEle = document.getElementById(this.props.id);
    let contentPos = contentEle.getBoundingClientRect();
    if (this.props.popVisible) {
      this.setState({
        contentHeight: contentPos.height
      });
    }
  }
  render() {
    console.log('contentHeight', this.state.contentHeight);
    let top = null;
    let left = null;
    switch (this.props.direction) {
      case 'RIGHT':
        top =
          this.props.buttonMarginTop -
          (this.state.contentHeight - this.props.buttonHeight) / 2;
        left = this.props.buttonWidth + this.props.buttonMarginLeft + 10;
        break;
      // case 'LEFT':
      //   top = this.props.positionTop - 110;
      //   left = this.props.positionLeft - 10;
      //   break;
      default:
        break;
    }

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
        <div ref="content" id={this.props.id} style={infoStyle}>
          {this.props.content}
        </div>
      );
    else return <div id={this.props.id} />;
  }
}
export default App;
