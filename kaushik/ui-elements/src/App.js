import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class TabContent extends Component {
	render() {
		return (
			<div id={this.props.id}>
				<p>This is a paragraph.</p>
			</div>
		);
	}
}

class Tabs extends Component {
	render() {
		return (
			<li>
				<a href={this.props.link_}>{this.props.title}</a>
			</li>
		);
	}
}

class UlContainer extends Component {
	render() {
		return (
			<div>
				<ul>
					<Tabs title="Tab1" link_="#tab1" />
					<Tabs title="Tab2" link_="#tab2" />
					<Tabs title="Tab3" link_="#tab3" />
				</ul>
				<TabContent />
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<UlContainer />

			</div>
		);
	}
}

export default App;
