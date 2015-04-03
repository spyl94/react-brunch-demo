import React from 'react';
import DemoAction from '../actions/DemoAction';

export default React.createClass({
	handleIncrease(){
		DemoAction.increase();
	},

	handleDecrease(){
		DemoAction.decrease();
	},

	render() {
		return(
			<div>
				<section>
					<button onClick={this.handleIncrease}>Increase</button>
					<button onClick={this.handleDecrease}>Decrease</button>
				</section>
			</div>
		)
	}
});