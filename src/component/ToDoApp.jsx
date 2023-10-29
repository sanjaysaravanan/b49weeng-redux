import { useSelector, useDispatch } from "react-redux";

const ToDoApp = () => {
  const { todos = [], todoText = "" } = useSelector(
    (state) => state.todoReducer
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "change_text", text: value });
  };

  const handleSubmit = () => {
    dispatch({ type: "create_todo", todo: todoText });
    dispatch({ type: "change_text", text: "" });
  };

  const handleRemove = (text) => {
    dispatch({ type: "delete_todo", todo: text });
  };

  return (
    <>
      <input onChange={handleChange} value={todoText} />
      <button onClick={handleSubmit}>Submit</button>
      {todos.map((t) => (
        <h3 key={t}>
          {t}
          <button onClick={() => handleRemove(t)} style={{ margin: 8 }}>
            X
          </button>
        </h3>
      ))}
    </>
  );
};

export default ToDoApp;
