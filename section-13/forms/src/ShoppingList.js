import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuid } from 'uuid';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: uuid(), name: "milk", qty: 2, units: "gallons"},
                { id: uuid(), name: "bread", qty: 4, units: "loaves"}
            ]
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem (item) {
        // let items = [...this.state.items];
        // items.push(item);
        // this.setState({
        //     items: items
        // })
        let newItem = { ...item, id: uuid()}
        this.setState(state => ({
            items: [...state.items, newItem]
        }));
    }

    renderItems () {
        return (
            <ul>
                {this.state.items.map(item => (
                <li key={item.id}>
                    {item.name}: {item.qty + " " + item.units}
                </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h1>shopping list</h1>
                {this.renderItems()}
                <ShoppingListForm addItem={this.addItem} />
            </div>
        );
    }
}

export default ShoppingList;