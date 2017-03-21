import {PATTERN_CHANGED} from '../actions'

const convertor = (state = [], action) => {
    switch (action.type) {
        case PATTERN_CHANGED:
            return [
                ...state,
                changeHelper(action),
                pattern : action.payload.pattern
            ]
        default:
            return state
    }
}

function changeHelper(test) {
    return console.log(test);
}

export default convertor
