import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm(props) {
  const [value, handleChange, reset] = useInputState(props.todo);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editTodo(props.id, value);
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
