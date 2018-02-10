import React from 'react';
import PropTypes from 'prop-types';

/**
 * A single todo item on the page.
 * 
 * The item contains some text, a remove button,
 * and a checkbox to toggle whether the item has been completed.
 */

export default function TodoItem(props) {
    const id = props.todo.get('id');
    const completed = props.todo.get('completed');
    const text = props.todo.get('text');

    const handleCompleted = () => props.completeTodo(id, !completed);
    const handleRemoved = () => props.removeTodo(id);

    return <div className="todo-item">
        <input
            name={'cb-' + id}
            type="checkbox"
            checked={completed}
            onChange={handleCompleted}/>

        <input type="text" className="todo-item-text"
                        value={text}
                        onChange={(e) => props.update(e.target.value)}/>

        <a className="icon right" onClick={handleRemoved}>x</a>
    </div>
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
}
