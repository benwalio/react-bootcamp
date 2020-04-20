import React, { Component } from 'react';
import BoxForm from './BoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    initialState() {
        return {
            boxes: [
                {id: uuid(), boxWidth: "100px", boxHeight: "200px"}
            ]
        }
    }

    removeBox(id) {
        let boxRemoved = [...this.state.boxes];
        // findindex is a great function for sorting through arrays of objects and returning an index
        boxRemoved.splice(this.state.boxes.findIndex(box => box.id === id), 1);
        this.setState({
            boxes: boxRemoved
        })
    }

    addBox(box) {
        let newBox = {...box, id: uuid()};
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    renderBoxes () {
        return (
            <div>
                {this.state.boxes.map(box => (
                    <Box key={box.id} id={box.id} width={box.boxWidth} height={box.boxHeight} removeBox={this.removeBox} />
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>boxy jawn</h1>
                <BoxForm addBox={this.addBox} />
                <h3>boxes:</h3>
                {this.renderBoxes()}
                
            </div>
        );
    }
}

export default BoxList;