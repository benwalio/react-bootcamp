import React from "react";
import useTodoState from './hooks/useTodoState'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const initTodos = JSON.parse(window.localStorage.getItem('todos')) || [];
  // const initTodos = [
  //   { id: 1, todo: "walk dog", completed: false },
  //   { id: 2, todo: "buy milk", completed: true },
  //   { id: 3, todo: "walk null", completed: false },
  //   { id: 4, todo: "feed dog", completed: true },
  //   { id: 5, todo: "pet dog", completed: false },
  //   { id: 6, todo: "laundry", completed: false },
  // ];
  const {todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initTodos);

  // useEffect(() => {
  //   window.localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])


  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">todoz wit hookz</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />

          <Todos todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}
