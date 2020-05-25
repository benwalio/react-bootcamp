import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function Todos(props) {
  if (props.todos.length)
    return (
      <Paper>
        <List>
          {props.todos.map((todo, idx) => (
            <>
              <Todo
                {...todo}
                // task={todo.todo}
                key={todo.id}
                // id={todo.id}
                // completed={todo.completed}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              {idx < props.todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}