import type { Action } from '../store';
export type State = number;
type IncrementAction = {| type: 'INCREMENT' |};
type DecrementAction = {| type: 'DECRETEMENT' |};
export type CounterAction = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({ type: 'INCREMENT' });
export const decrement = (): DecrementAction => ({ type: 'DECRETEMENT' });

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
