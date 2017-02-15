import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as counterReducer } from './redux/counter';
import type { State as counterState, CounterAction } from './redux/counter';
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type State = {
  counter: counterState,
};
export type Action = CounterAction;
export type Dispatch = ReduxDispatch<Action>;

export default (): ReduxStore<State, Action> => {
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
