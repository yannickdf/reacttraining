import React from 'react';
import { createTodo } from './todoUtils';
import TodoItem from './TodoItem';
import TodosFooter from './TodosFooter';
import TodosMessage from './TodosMessage';
import './todos.css';

/**
 * The todos page. Manages a list of todos.
 * Todos can be created, removed and completed.
 * 
 * Completed todos are hidden by default.
 */

export default class TodosPage extends React.Component {
    
    constructor() {
        super();

        /** 
         * initial application state. We manage the whole app state
         * inside this component.
         */

        this.state = {
            showCompleted: false,
            headerText: '',
            todos: [],
            allCompleted : false
        }
    }

    /**
     * Main render function for the page.
     * Shows a container with a list of todos inside
     */
    render() {
        return <div className="todos-page">
            <div className="todos-page-content">
                <div className="todos-header">
                    <h1>Todos</h1>
                    
                    <input type="text"
                        placeholder="press enter to add a todo"
                        value={this.state.headerText}
                        onChange={(e) => this.setHeaderText(e.target.value)}
                        onKeyPress={(e) => this.handleKeyPressed(e)}/>
                </div>

                <div>Total: {this.state.todos.length}</div>
                <div>Incomplete: {this.state.todos.filter((todo) => todo.completed === false).length}</div>


                <div className="todos-list">
                    { this.renderTodos() }
                </div>
            </div>

            <TodosFooter
                showCompleted={this.state.showCompleted}
                setShowCompleted={this.setShowCompleted.bind(this)}/>
            <br/>
            <input type="button" value="Clear todos"
              onClick={() => this.clearTodos()}/>
            <br/>
            <TodosMessage
                allCompleted={this.state.todos.length > 0 && this.state.todos.filter((todo) => todo.completed === false).length === 0}/>
        </div>
    }

    /**
     * Render the todos list
     */
    renderTodos() {
        return this.state.todos
          .filter((todo) => todo.completed === false || this.state.showCompleted === true)
          .map((todo) => {
            return <TodoItem
                key={todo.id}
                text={todo.text}
                id={todo.id}
                completed={todo.completed}
                completeTodo={this.completeTodo.bind(this)}
                removeTodo={this.removeTodo.bind(this)}/>;
        })
    }

    handleKeyPressed(e) {
        if(e.key === 'Enter' && this.state.headerText !== '') {
            const todo = createTodo(this.state.headerText)
            this.addTodo(todo);
        }
    }


    
    /** 
     * Methods to manage the application state.
     * We make these functions accessible to the child components, by passing through as callback functions.
     */

    addTodo(todo) {
        this.setState({
            todos: this.state.todos.concat([todo]),
            headerText: ''
        });
    }

    setHeaderText(text) {
        this.setState({
            headerText: text
        })
    }

    removeTodo(id) {
        const todos = this.state.todos;
        this.setState({
            todos: todos.filter((todo) => todo.id !== id)
        })
    }

    completeTodo(id, completed) {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.id !== id) return todo;
                return { ...todo, completed }
            })
        })
    }

    setShowCompleted(showCompleted) {
        this.setState({
          showCompleted : showCompleted
        })
    }

    clearTodos() {
      this.setState({
        todos: []
      })
    }
}
