import {FROM_PATTERN_CHANGED, TO_PATTERN_CHANGED, CHANGE_INPUT} from '../actions'
import convert from '../common/Converter'

const initialState = {
    input: null,
    output: null,
    pattern: {
        from: 1,
        to: 1
    }
}

const convertor = (state = initialState, action) => {
    switch (action.type) {
        case FROM_PATTERN_CHANGED:
            return {
                ...state,
                pattern: {
                    ...state.pattern,
                    from: action.payload
                },
                output: convert(state.input, action.payload, state.pattern.to)
            }
        case TO_PATTERN_CHANGED:
            return {
                ...state,
                pattern: {
                    ...state.pattern,
                    to: action.payload
                },
                output: convert(state.input, state.pattern.from, action.payload)
            }
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.payload,
                output: convert(action.payload, state.pattern.from, state.pattern.to)
            }
        default:
            return state
    }
}
export default convertor
