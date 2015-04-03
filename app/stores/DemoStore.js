import {EventEmitter} from 'events';
import DemoDispatcher from '../dispatcher/DemoDispatcher'
import DemoConstants from '../constants/DemoConstants';

const CHANGE_EVENT = "change";
let count = 0;

function _increase() {
	count++;
}

function _decrease(){
	count--;
}

class DemoStore extends EventEmitter{
	
	getCount(){
		return count;
	}

	emitChange(){
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}
}
var demoStore = new DemoStore();
DemoDispatcher.register((action) => {
	switch(action.actionType){
		case DemoConstants.DEMO_INCREASE:
			_increase();
			demoStore.emitChange();
			break;
		case DemoConstants.DEMO_DECREASE:
			_decrease();
			demoStore.emitChange();
			break;
		default:
	}
});

export default demoStore;