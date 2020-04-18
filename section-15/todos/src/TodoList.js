import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.content} <span className="edit-icon"><i class="fas fa-edit" onClick={this.handleClick}></i></span><span className="trash-icon" onClick={this.handleClick}><i class="fas fa-trash"></i></span>
            </div>
        );
    }
}

export default TodoList;