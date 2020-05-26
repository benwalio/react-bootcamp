import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggle from './hooks/useToggle.js';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todos.context'

function Todo(props) {
    const [isEditing, toggle] = useToggle();
    const dispatch = useContext(DispatchContext);

  return (
    <ListItem key={props.id} style={{ height: '64px'}}>
    {isEditing ? <EditTodoForm editing={toggle} id={props.id} todo={props.todo} /> :
    <>
      <Checkbox tabIndex={-1} checked={props.completed} onClick={() => dispatch({ type:"TOGGLE", id: props.id })} />
      <ListItemText style={{ textDecoration: !props.completed ? '' : 'line-through'}}>{props.todo}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='edit' onClick={toggle}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='delete' onClick={() => dispatch({ type: "REMOVE", id: props.id })}>
          <DeleteIcon />
        </IconButton>
        
      </ListItemSecondaryAction>
      </>
    }
    </ListItem>
  );
}

export default memo(Todo);