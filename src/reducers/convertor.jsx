import {FROM_PATTERN_CHANGED, TO_PATTERN_CHANGED, CHANGE_INPUT, SAVE_LOG, GET_FROM_LOG} from '../actions'
import convert from '../common/Converter'

const initialState = {
    input: null,
    output: null,
    patterns: {
        length: [
            {
                index: 1,
                name: 'mm'
            }, {
                index: 10,
                name: 'cm'
            }, {
                index: 100,
                name: 'dm'
            }, {
                index: 1000,
                name: 'm'
            }
        ],
        weight: [
            {
                index: 1,
                name: 'gr'
            }, {
                index: 1000,
                name: 'kg'
            }, {
                index: 100000,
                name: 'cen'
            }, {
                index: 1000000,
                name: 'tn'
            }
        ],
        currency: [
            {
                index: 1,
                name: 'gold'
            }, {
                index: 1 / 78.01,
                name: 'BYN'
            }, {
                index: 1 / 41.4,
                name: 'USD'
            }, {
                index: 1 / 2340.955,
                name: 'RUB'
            }, {
                index: 1 / 38.83,
                name: 'EUR'
            }
        ]
    },
    pattern: {
        from: 1,
        to: 1
    },
    log: []
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
        case SAVE_LOG:
            return {
                ...state,
                log: [
                    ...state.log,
                    action.payload
                ]
            }
        case GET_FROM_LOG:
            return {
                ...state,
                input: action.payload.input.value,
                output: action.payload.output.value,
                pattern: {
                    from: action.payload.input.index,
                    to: action.payload.output.index
                }
            }
        default:
            return state
    }
}
export default convertor
