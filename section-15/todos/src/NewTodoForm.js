import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task = ""
        } 
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label onSubmit={this.handleSubmit} htmlFor="task">new task</label>
                    <input 
                        type="text"
                        name="task"
                        id="task"
                        onChange={this.state.task}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;