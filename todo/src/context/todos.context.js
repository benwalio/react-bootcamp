import React, { createContext, useReducer } from "react";
import TodoReducer from "../reducers/todo.reducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const initTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useReducer(TodoReducer, initTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
