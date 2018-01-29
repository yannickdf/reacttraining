import React from 'react';
import PropTypes from 'prop-types';

export default function TodosMessage(props) {
    let message = '';
    if(props.allCompleted) {
      message = 'All completed!'
    }

    return <h2>{message}</h2>
}

TodosMessage.propTypes = {
    allCompleted : PropTypes.bool.isRequired
}
