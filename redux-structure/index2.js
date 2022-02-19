const { createStore, compose, applyMiddleware } = require("redux");

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const reducer = (prevState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...prevState,
        isLoggingIn: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...prevState,
        isLoggingIn: false,
        error: action.error,
      };
    default:
      return prevState;
  }
};
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
    error: null,
  },
  posts: [],
};
const firstMiddleware = (store) => (dispatch) => (action) => {
  /* 확장성이 뛰어난 커링 방식 */
  console.log("ACTION-LOG", action);
  // 기능 추가
  dispatch(action);
  // 기능 추가
};
const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기인 경우 action을 함수로 만들어주겠다.
    return action(store.dispatch, store.getState); // 순서 상관 없음
  }
  return dispatch(action);
};
const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware));
const store = createStore(reducer, initialState, enhancer);

console.log("1st", store.getState());

/* async action creator */
const logInAsync = (data) => {
  return (dispatch, getState) => {
    /* async action */
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            id: 1,
            name: "Sean",
            admin: true,
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};
const logInSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};
const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

store.dispatch(
  logInAsync({
    id: 1,
    name: "Sean",
    admin: true,
  })
);
console.log("2nd", store.getState());
