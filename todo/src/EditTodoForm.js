import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from './context/todos.context'

function EditTodoForm(props) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(props.todo);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: props.id, task: value})
        reset();
        props.editing();
      }}
      style={{ marginLeft: '1rem', width: '70%' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
