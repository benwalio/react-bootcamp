import React, { Component } from 'react';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState() {
        return ({
            name: "",
            qty:  0,
            units: ""
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState(this.initialState);
    }

    render() {
        return (
            <div>
                <h2>shopping list form...</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="qty">quantity:</label>
                    <input 
                        type="number"
                        id="qty"
                        name="qty"
                        value={this.state.qty}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="units">units:</label>
                    <input 
                        type="text"
                        id="units"
                        name="units"
                        value={this.state.units}
                        onChange={this.handleChange}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default ShoppingListForm;