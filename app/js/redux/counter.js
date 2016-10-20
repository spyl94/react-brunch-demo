const INCREMENT = 'INCREMENT';
const DECRETEMENT = 'DECRETEMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECRETEMENT });

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECRETEMENT:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
