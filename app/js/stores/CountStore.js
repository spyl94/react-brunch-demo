import BaseStore from './BaseStore';
import {COUNT_INCREASE, COUNT_DECREASE} from '../constants/CountConstants';

class CountStore extends BaseStore {

  constructor() {
    super();
    this._count = 0;
    this.register(this._registerToActions.bind(this));
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case COUNT_INCREASE:
        this._count++;
        this.emitChange();
        break;
      case COUNT_DECREASE:
        this._count--;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get count() {
    return this._count;
  }
}

export default new CountStore();
