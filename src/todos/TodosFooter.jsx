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
            <div className="todos-option">
                <button onClick={props.completeAll}>Complete All</button>´
            </div>
            <div className="todos-option">
                <p>{props.numberOfIncompleteTodos + '/' + props.numberOfTodos}</p>
            </div>
    </div>
}

TodosFooter.propTypes = {
    completeAll: PropTypes.func.isRequired,
    numberOfTodos: PropTypes.number.isRequired,
    numberOfIncompleteTodos: PropTypes.number.isRequired,
    showCompleted: PropTypes.bool.isRequired,
    setShowCompleted: PropTypes.func.isRequired
}
