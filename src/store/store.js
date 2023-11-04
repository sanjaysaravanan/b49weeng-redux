// Creating a redux store here
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const storeToLocalStorage = (props) => {
  return (next) => (action) => {
    const result = next(action); // doing the action & getting the result
    localStorage.setItem("redux_state", JSON.stringify(props.getState())); // loading the resux state into localStorage
    return result;
  };
};

const store = configureStore({
  reducer: {
    counterReducer,
    todoReducer,
  },
  devTools: true, // enable dev tools extension should be false for production
  preloadedState: (function () {
    if (localStorage.getItem("redux_state") !== null) {
      // if storage values found, then load the values when we refresh
      return JSON.parse(localStorage.getItem("redux_state"));
    }
  })(),
  middleware: (defaultMiddleWares) => [
    ...defaultMiddleWares(),
    storeToLocalStorage,
  ],
});

export default store;
