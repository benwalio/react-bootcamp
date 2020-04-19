import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import ls from 'local-storage';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.removeTodo = this.removeTodo.bind(this);
        this.renderTodos = this.renderTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.editTodo = this.editTodo.bind(this);
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

    toggleDone(id) {
        let state = {...this.state};
        let index = this.state.todos.findIndex(todo => todo.id === id);
        state.todos[index].done = !state.todos[index].done;
        // console.log(todos.todos[this.state.todos.findIndex(todo => todo.id === id)]);
        // console.log(state);
        this.setState({
            todos: state.todos
        })
        ls.set('todos', state.todos)
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
        
        todoRemoved.splice(this.state.todos.findIndex(todo => todo.id === id), 1);
        
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

    editTodo(id, content) {
        let todos = [...this.state.todos];
        let index = this.state.todos.findIndex(todo => todo.id === id);
        todos[index].content = content;
        // console.log(todos.todos[this.state.todos.findIndex(todo => todo.id === id)]);
        // console.log(state);
        this.setState({
            todos:todos
        })
        ls.set('todos', todos)       
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
                            done={todo.done}
                            editTodo={this.editTodo}
                            removeTodo={this.removeTodo}
                            toggleDone={this.toggleDone}
                        />
                    </li>
                )}
            </ul>
        )
    }

    render() {
        return (
            <div className="TodoList">
                <h1>todo list</h1>
                <p>a simple react todo list</p>
                {this.renderTodos()}
                <NewTodoForm key={uuid()} addTodo={this.addTodo} />
            </div>
        );
    }
}

export default TodoList;