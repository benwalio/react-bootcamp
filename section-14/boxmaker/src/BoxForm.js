import React, { Component } from 'react';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState() {
        return ({
            boxHeight: "0px",
            boxWidth: "0px"
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addBox(this.state);
        this.setState(this.initialState());
    }

    render() {
        return (
            <div>
                <h3>add new box</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="height">height:</label>
                    <input 
                        type="text"
                        id="height"
                        name="boxHeight"
                        value={this.state.boxHeight}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="width">width:</label>
                    <input 
                        type="text"
                        id="width"
                        name="boxWidth"
                        value={this.state.boxWidth}
                        onChange={this.handleChange}
                    />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default BoxForm;