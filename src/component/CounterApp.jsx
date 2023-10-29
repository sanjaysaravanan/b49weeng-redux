import { useSelector, useDispatch } from "react-redux";

const CounterApp = () => {
  // take the count value from redux state
  // useSelector allows us to select the value from the redux state
  // const counterReducer = useSelector((state) => state.counterReducer);
  const { count } = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();

  const handleInc = () => {
    // trigger an action in the reducer use useDispatch
    dispatch({ type: "increment" });
  };

  const handleDec = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      {/* <h1>{counterReducer.count}</h1> */}
      <h1>{count}</h1>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
    </>
  );
};

export default CounterApp;
