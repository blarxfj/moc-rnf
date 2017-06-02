import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//------------------------ UlContainer ----------------------------

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
		for (let i = 0; i < data.length; i++) {
			tabs.push(
				<Tab
					title={data[i].title}
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

//------------------------ Dropdown ----------------------------

var DropdownElementNames = [
	{
		name: 'Dropdown',
		link_: '#1'
	},
	{
		name: 'Dropdown1',
		link_: '#2'
	},
	{
		name: 'Dropdown2',
		link_: '#3'
	},
	{
		name: 'Dropdown3',
		link_: '#4'
	}
];

class DropdownElement extends Component {
	render() {
		return (
			<div>
				{this.props.name}
			</div>
		);
	}
}

class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isClicked: false
		};
	}

	onClick = () => {
		this.setState({
			isClicked: !this.state.isClicked
		});
	};

	render() {
		var Elements = [];
		for (var i = 0; i < this.props.DropdownElementNames.length; i++) {
			Elements.push(
				<DropdownElement
					name={this.props.DropdownElementNames[i].name}
					link={this.props.DropdownElementNames[i].link_}
					key={i.toString()}
				/>
			);
		}

		if (this.state.isClicked) {
			var style_not_visible = { visibility: 'hidden' };
			var style_visible = { visibility: 'visible' };
			return (
				<div>
					<h3 onClick={this.onClick}>Dropdown List </h3>
					<div style={style_not_visible}>
						{Elements}
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h3 onClick={this.onClick}>Dropdown List</h3>
					<div style={style_visible}>
						{Elements}
					</div>
				</div>
			);
		}
	}
}

//------------------------ Dropdown ----------------------------

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
				<Dropdown DropdownElementNames={DropdownElementNames} />
			</div>
		);
	}
}
// <UlContainer data={data} />

export default App;
