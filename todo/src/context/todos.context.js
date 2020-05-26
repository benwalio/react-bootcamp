import React, { createContext } from "react";
import TodoReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const initTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useLocalStorageReducer('todos', initTodos, TodoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
