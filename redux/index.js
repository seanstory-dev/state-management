const { createStore } = require("redux");

const CHANGE_A = "CHANGE_A";

const reducer = (prevState, action) => {
  switch (action.type) {
    case CHANGE_A:
      return {
        ...prevState,
        a: action.data,
      };
    default:
      return prevState;
  }
};
const initialState = {
  a: 1,
  b: 2,
  c: 3,
};
const store = createStore(reducer, initialState);

console.log("1st", store.getState());

/* action */
// const changeA = {
//   type: CHANGE_A,
//   data: 11,
// };
/* action creator */
const changeA = (data) => {
  return {
    type: CHANGE_A,
    data,
  };
};
store.dispatch(changeA(100));

console.log("2nd", store.getState());

