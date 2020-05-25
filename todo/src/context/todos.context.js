import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

export const TodosContext = createContext();

export function TodosProvider(props) {
    const initTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initTodos);

    return (
      <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}>
        {props.children}
      </TodosContext.Provider>
    );
}