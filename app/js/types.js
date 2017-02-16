import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { State as counterState, CounterAction } from './redux/counter';

// All dispatchable actions
export type Action = CounterAction;

// Global application state
export type State = {
  counter: counterState,
};

// Application store
export type Store = ReduxStore<State, Action>;

// Dispatch accepting only Action
export type Dispatch = ReduxDispatch<Action>;
