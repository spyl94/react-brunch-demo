import DemoDispatcher from '../dispatcher/DemoDispatcher';
import DemoConstants from '../constants/DemoConstants';

var DemoAction = {
	increase: () =>{
		DemoDispatcher.dispatch({
			actionType: DemoConstants.DEMO_INCREASE
		});
	}, 

	decrease: () =>{
		DemoDispatcher.dispatch({
			actionType: DemoConstants.DEMO_DECREASE
		});
	}
};

export default DemoAction;