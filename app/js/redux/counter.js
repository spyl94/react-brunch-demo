// @flow
type State = number;
type IncrementAction = { type: 'INCREMENT' };
type DecrementAction = { type: 'DECRETEMENT' };
type Action = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({ type: 'INCREMENT' });
export const decrement = (): DecrementAction => ({ type: 'DECRETEMENT' });

const reducer = (state: State = 0, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECRETEMENT':
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
