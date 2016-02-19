import BaseStore from './BaseStore';
import * as CountConstants from '../constants/CountConstants';

class CountStore extends BaseStore {

  constructor() {
    super();
    this.register(this._registerToActions.bind(this));
    this._count = 0;
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case CountConstants.COUNT_INCREASE:
        this._count++;
        this.emitChange();
        break;
      case CountConstants.COUNT_DECREASE:
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
