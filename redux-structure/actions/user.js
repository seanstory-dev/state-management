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
  logOut,
  LOG_IN,
  LOG_OUT,
};
