import AppDispatcher from '../dispatcher/AppDispatcher';

export default class BaseStore extends EventEmitter {

  constructor() {
    super();
  }

  register(actionSubscribe) {
    this._dispatchToken = AppDispatcher.register(actionSubscribe);
  }

  get dispatchToken() {
    return this._dispatchToken;
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(cb) {
    this.on('CHANGE', cb);
  }

  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}
