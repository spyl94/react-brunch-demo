import type { Action } from '../types';

// 1. Describe your state
export type State = number;

// 2. Describe your actions
type IncrementAction = {| type: 'INCREMENT' |};
type DecrementAction = {| type: 'DECREMENT' |};

// 3. Describe an union of actions
export type CounterAction = IncrementAction | DecrementAction;

// 4. Implements action creators
export const incrementAction = (): IncrementAction => ({ type: 'INCREMENT' });
export const decrementAction = (): DecrementAction => ({ type: 'DECREMENT' });

// 5. Implements reducer
export const reducer = (state: State = 42, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECRETEMENT':
      return state - 1;
    default:
      return state;
  }
};
