import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggle from './hooks/useToggle.js';
import EditTodoForm from './EditTodoForm';

export default function Todo(props) {
    const [isEditing, toggle] = useToggle();

  return (
    <ListItem key={props.id} style={{ height: '64px'}}>
    {isEditing ? <EditTodoForm editing={toggle} id={props.id} todo={props.todo} editTodo={props.editTodo} /> :
    <>
      <Checkbox tabIndex={-1} checked={props.completed} onClick={() => props.toggleTodo(props.id)} />
      <ListItemText style={{ textDecoration: !props.completed ? '' : 'line-through'}}>{props.todo}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='edit' onClick={toggle}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='delete' onClick={() => props.removeTodo(props.id)}>
          <DeleteIcon />
        </IconButton>
        
      </ListItemSecondaryAction>
      </>
    }
    </ListItem>
  );
}
