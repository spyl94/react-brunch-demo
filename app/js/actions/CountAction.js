import AppDispatcher from '../dispatcher/AppDispatcher';
import CountConstants from '../constants/CountConstants';

var DemoAction = {
	increase: () =>{
		AppDispatcher.dispatch({
			actionType: CountConstants.COUNT_INCREASE
		});
	},

	decrease: () =>{
		AppDispatcher.dispatch({
			actionType: CountConstants.COUNT_DECREASE
		});
	}
};

export default DemoAction;
