import React, { Component } from 'react';
import NumberItem from './NumberItem';

class Numberlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [1, 2, 2, 2, 2, 2, 2, 3, 4, 3, 4, 3, 4, 3, 4, 5]
        };
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }))
        this.remove = this.remove.bind(this);
    }

    render() {
        let nums = this.state.nums.map(n => (
            <NumberItem value={n} remove={() => this.remove(n)} />
        ));

        return (
            <div>
                <h1>number list</h1>
                <ul>{nums}</ul>
            </div>
        );
    }
}

export default Numberlist;