import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuid } from "uuid";

export default (initTodos = JSON.parse(window.localStorage.getItem("todos")) || []) => {
  const [todos, setTodos] = useLocalStorageState('todos', initTodos);

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), todo: newTodoText, completed: false }]);
    },
    removeTodo: (todoID) => {
      let updatedTodos = todos.filter((todo) => todo.id !== todoID);
      setTodos(updatedTodos);
    },
    toggleTodo: (todoID) => {
      let updatedTodos = todos.map((todo) =>
        todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoID, newTodo) => {
      let updatedTodos = todos.map((todo) =>
        todo.id === todoID ? { ...todo, todo: newTodo } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
