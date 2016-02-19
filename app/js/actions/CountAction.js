import AppDispatcher from '../dispatcher/AppDispatcher';
import * as CountConstants from '../constants/CountConstants';

const DemoAction = {

  increase: () => {
    AppDispatcher.dispatch({
      actionType: CountConstants.COUNT_INCREASE,
    });
  },

  decrease: () => {
    AppDispatcher.dispatch({
      actionType: CountConstants.COUNT_DECREASE,
    });
  },

};

export default DemoAction;
