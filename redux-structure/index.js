const { createStore } = require("redux");
const reducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};
const store = createStore(reducer, initialState);

console.log("1st", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "Sean",
    admin: true,
  })
);
console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "반가워!",
  })
);
console.log("3rd", store.getState());

store.dispatch(logOut());
console.log("4th", store.getState());
