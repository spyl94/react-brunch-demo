import React from 'react';
import Header from './Header.react';
import Content from './Content.react';
import demoStore from '../stores/DemoStore';

var DemoApp = React.createClass({
	getInitialState() {
		return {
			count: demoStore.getCount()
		};
	},
	componentDidMount(){
		demoStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		demoStore.removeChangeListener(this._onChange);
	},
	render() {
		return (
		  <div>
	      	<Header />
	      	<Content count={this.state.count}/>
	      </div>
	    )
	},
	_onChange(){
		this.setState({
			count: demoStore.getCount()
		});
	}
});

export default DemoApp;