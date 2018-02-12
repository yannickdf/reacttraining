import Imm from 'immutable';
import ActionTypes from './exercisesActions';

export default function(state = Imm.Map(), action) {
    switch(action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            return incrementCounter(state, action);
        case ActionTypes.SET_BC_CONVERSION_INPUT:
            return setBcConversionInput(state, action);
        case ActionTypes.RECEIVE_LATEST_BC_VALUE:
            return receiveLatestBCValue(state, action);
        case ActionTypes.SELECT_BCC_CURRENCY:
            return selectBCCurrency(state, action);

        // add more reducer functions here
        // ...


        default:
            return state;
    }
}

function incrementCounter(state, action) {
    return state.set('counter', state.get('counter') + 1);
}

function setBcConversionInput(state, action) {
    return state.set('input', action.value);
}

function receiveLatestBCValue(state, action) {
    return state.set('bitcoin', action.result)
}

function selectBCCurrency(state, action) {
    return state.set('bcConversionCurrency', action.currency)
}
