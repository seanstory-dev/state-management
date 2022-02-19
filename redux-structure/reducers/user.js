const {
  LOG_IN,
  LOG_OUT,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} = require("../actions/user");

const initialState = {
  isLoggingIn: false,
  data: null,
  error: null,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...prevState,
        data: action.data,
      };
    case LOG_OUT:
      return {
        ...prevState,
        data: null,
      };
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

module.exports = userReducer;
