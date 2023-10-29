import { Provider } from "react-redux";

import "./App.css";
import CounterApp from "./component/CounterApp";
import ToDoApp from "./component/ToDoApp";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <CounterApp />
      <br />
      <br />
      <ToDoApp />
    </Provider>
  );
}

export default App;
