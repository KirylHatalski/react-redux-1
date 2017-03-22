import {
  FROM_PATTERN_CHANGED,
  TO_PATTERN_CHANGED,
  CHANGE_INPUT
} from '../actions'

const initialState = {
  input: null,
  output: null,
  pattern: { from: 1000, to: 1000}
}

const convertor = (state = initialState, action) => {
    switch (action.type) {
        case FROM_PATTERN_CHANGED:
            return {
                ...state,
                pattern: {...state.pattern, from: action.payload},
                output: ((state.input * action.payload) / state.pattern.to)
            }
        case TO_PATTERN_CHANGED:
            return {
                ...state,
                pattern: {...state.pattern, to: action.payload},
                output: (state.pattern.from / (state.input * action.payload))
            }
        case CHANGE_INPUT:
            return {
              ...state,
              input: action.payload,
              output: (state.pattern.to / (action.payload * state.pattern.from))
            }
        default:
            return state
    }
}

function changeHelper(test) {
    return console.log(test);
}

export default convertor
