import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        // prvent page refresh on submit
        e.preventDefault();
        console.log(this.state);
        this.setState({username: ''});
    }

    render() {
        return (
            <div>
                <h1>forms</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="username"
                        value={this.state.username} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default Forms;