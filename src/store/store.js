// Creating a redux store here
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const store = configureStore({
  reducer: {
    counterReducer,
    todoReducer,
  },
  devTools: true, // enable dev tools extension should be false for prod
});

export default store;
