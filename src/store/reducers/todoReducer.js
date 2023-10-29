const initialState = {
  todos: [],
  todoText: "",
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "create_todo":
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case "delete_todo":
      return {
        ...state,
        todos: state.todos.filter((t) => t !== action.todo),
      };
    case "change_text":
      return {
        ...state,
        todoText: action.text,
      };
    default:
      return state;
  }
}

export default todoReducer;
