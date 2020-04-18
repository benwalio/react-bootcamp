import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor (props) {
        super(props);
        this.state = this.initialState();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    
    initialState () {
        return ({
            content: ""
        })
    };
    

    handleSubmit (e) {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState(this.initialState);
    };

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">new task</label>
                    <input 
                        type="text"
                        name="content"
                        id="task"
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;