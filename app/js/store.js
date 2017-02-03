import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as counterReducer } from './redux/counter';
import type { State as counterState } from './redux/counter';

export type State = {
  counter: counterState,
};

export default () => {
  const reducers = {
    counter: counterReducer,
  };
  const reducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    undefined,
    compose(
      applyMiddleware(sagaMiddleware),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
    ),
  );
  // sagaMiddleware.run(ideaSaga);
  return store;
}
