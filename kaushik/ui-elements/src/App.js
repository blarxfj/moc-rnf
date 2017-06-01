import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var data = [
	{
		title: 'Tab1',
		content: 'This is a paragraph 1',
		id: 1
	},
	{
		title: 'Tab2',
		content: 'This is a paragraph 2',
		id: 2
	},
	{
		title: 'Tab3',
		content: 'This is a paragraph 3',
		id: 3
	}
];

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
		return (
			<div style={{ padding: 20, background: 'grey' }} onClick={this.onClick}>
				{this.props.title}
			</div>
		);
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
		for (let i = 0; i < data.length; i++) {
			tabs.push(
				<Tab title={data[i].title} key={i} onClick={this.onClick} ele_id={i} />
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
				<UlContainer tab={2} data={data} />

			</div>
		);
	}
}

export default App;
