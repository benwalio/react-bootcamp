import React, { Component } from 'react';

class Todo extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    };
    
    handleClick (e) {
        e.preventDefault();
        console.log(e.target.className.includes("edit"));
        if (e.target.className.includes("edit")) {
            this.editTodo();
        } else if (e.target.className.includes("remove")) {
            this.removeTodo();
        } else if (e.target.className.includes("task")) {
            this.taskStyle = {
                "text-decoration": "line-through;"
            };
        }
        
    }

    removeTodo () {
        this.props.removeTodo(this.props.id);
    }

    editTodo () {

    }

    render() {

        return (
            <div onClick={this.handleClick}>
                <span className="task-content" style={this.taskStyle}>{this.props.content}</span> 
                <span className="edit-icon"><i className="edit fas fa-edit" onClick={this.handleClick}></i></span>
                <span className="trash-icon"><i className="remove fas fa-trash" onClick={this.handleClick}></i></span>
            </div>
        );
    }
}

export default Todo;