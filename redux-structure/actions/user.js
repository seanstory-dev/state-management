/* async */
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

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
const logInFailure = (data) => {
  return {
    type: LOG_IN_FAILURE,
    data,
  };
};
const logInSuccess = (error) => {
  return {
    type: LOG_IN_SUCCESS,
    error,
  };
};

/* sync */
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

/* action creator */
const logIn = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};
const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

module.exports = {
  logIn,
  logInAsync,
  logOut,
  LOG_IN,
  LOG_OUT,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
};
