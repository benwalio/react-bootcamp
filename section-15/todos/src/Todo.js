import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            content: this.props.content,
            editing: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.removeTodo = this.removeTodo.bind(this);
    };
    
    handleClick (e) {
        e.preventDefault();
        if (e.target.className.includes("edit")) {
            this.toggleEdit();
        } else if (e.target.className.includes("remove")) {
            this.removeTodo();
        } else if (e.target.className.includes("task")) {
            this.props.toggleDone(this.props.id);
        }
        
    }

    removeTodo () {
        this.props.removeTodo(this.props.id);
    }

    toggleEdit () {
        this.setState({
            editing: !this.state.editing
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.editTodo(this.props.id, this.state.content);
        this.setState({
            editing: false
        })
    }

    renderTodo() {
        return (
            <div onClick={this.handleClick} className="Todo">
                <span className={this.props.done ? 'task-content done' : 'task-content'}>{this.props.content}</span> 
                <span className="edit-icon"><i className="edit fas fa-edit" onClick={this.handleClick}></i></span>
                <span className="trash-icon"><i className="remove fas fa-trash" onClick={this.handleClick}></i></span>
            </div>
        )
    }

    renderEdit() {
        return (
            <div className="Todo-Edit">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="edit">edit</label>
                    <input 
                        type="text" 
                        name="content" 
                        id="edit"
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                </form>
            </div>
        )

    }

    render() {

        return (
            <div>
                {this.state.editing ? this.renderEdit() : this.renderTodo()}
            </div>
        );
    }
}

export default Todo;