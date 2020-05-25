import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./context/todos.context";

export default function TodoApp() {
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
          <TodosProvider>
            <TodoForm />

            <Todos />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
