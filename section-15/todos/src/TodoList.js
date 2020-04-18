import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import ls from 'local-storage';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.removeTodo = this.removeTodo.bind(this);
        this.renderTodos = this.renderTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        // fetch(URL)
        // .then(response => response.json())
        // .then(json => this.setState({
        //   todos: ls.get('todos') || []
        // }));
        this.setState({
            todos: ls.get('todos') || this.initialState()
        });
      }

    initialState() {
        return (
            {todos: [
                {content: "task 1", id: uuid(), done: false}
            ]}
        )
    }

    removeTodo(id) {
        let todoRemoved = [...this.state.todos];
        console.log(todoRemoved);
        
        todoRemoved.splice(this.state.todos.findIndex(todo => todo.id === id), 1);
        console.log(todoRemoved);
        
        this.setState({
            todos: todoRemoved
        });
        ls.set('todos', todoRemoved);
    }

    addTodo (todo) {
        let newTodo = {...todo, id: uuid()};
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }), () => this.saveToLocal());
    }

    saveToLocal() {
        const local = this.state.todos;
        ls.set('todos', local);
    }

    toggleDone(id) {
        this.setState({})
    }

    renderTodos() {
        return (
            <ul>
                {this.state.todos.map(todo =>
                    <li key={uuid()}>
                        <Todo 
                            key={todo.id}
                            id={todo.id}
                            content={todo.content}
                            removeTodo={this.removeTodo}
                        />
                    </li>
                )}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h1>todo list</h1>
                {this.renderTodos()}
                <NewTodoForm key={uuid()} addTodo={this.addTodo} />
            </div>
        );
    }
}

export default TodoList;