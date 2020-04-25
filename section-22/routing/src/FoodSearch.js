import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FoodSearchDiv = styled.div`
    
`;

const FoodSearchForm = styled.form`
    
`;

class FoodSearch extends Component {
    constructor (props) {
        super(props);
        this.state = this.initialState();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    initialState () {
        return ({
            search: ""
        })
    };

    handleSubmit(e) {
        // e.preventDefault();
        this.props.history.push(`/food/${this.state.search}`)
        // this.setState(this.initialState);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <FoodSearchDiv>
                <FoodSearchForm onSubmit={this.handleSubmit}>
                    <label htmlFor="search"></label>
                    <input type="text" name="search" placeholder="search for a food" value={this.state.search} onChange={this.handleChange} />
                    {/* <Link to={`/food/${this.state.search}`}>go</Link> */}
                    <button onClick={this.handleSubmit}>Save new food</button>
                </FoodSearchForm>
            </FoodSearchDiv>
        );
    }
}

export default FoodSearch;