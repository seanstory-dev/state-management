const ADD_POST = "ADD_POST";

/* action creator */
const addPost = (data) => {
  return {
    type: ADD_POST,
    data,
  };
};

module.exports = {
  addPost,
  ADD_POST,
};
