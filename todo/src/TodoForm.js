import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from './context/todos.context'

export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
