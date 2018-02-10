import React from 'react';
import PropTypes from 'prop-types';

/**
 * Options for the todos list
 */

export default function TodosFooter(props) {

    const setShowCompleted = () => props.setShowCompleted(!props.showCompleted);

    return <div className="todos-footer">
            <div className="todos-option">
                <input type="checkbox"
                    checked={props.showCompleted}
                    onChange={setShowCompleted}/>Show Completed
            </div>
            <div><p>{'Number of Todos: ' + props.numberOfTodos}</p></div>
            <div><p>{'Number of Incomplete Todos: ' + props.numberOfIncompleteTodos}</p></div>
            <button onClick={props.completeAll}>Complete All</button>
    </div>
}

TodosFooter.propTypes = {
    completeAll: PropTypes.func.isRequired,
    numberOfTodos: PropTypes.number.isRequired,
    numberOfIncompleteTodos: PropTypes.number.isRequired,
    showCompleted: PropTypes.bool.isRequired,
    setShowCompleted: PropTypes.func.isRequired
}
