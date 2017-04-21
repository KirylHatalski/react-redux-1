import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Patterns from '../components/Patterns';

import {changeToPattern, getPatterns, saveToLog, findField} from '../actions';

function mapStateToProps(state) {
    return {
        // pattern: 1,
        patterns: getPatterns(state),
        current: {
            input: {
                value: state.convertor.input,
                index: state.convertor.pattern.to,
                name: findField(getPatterns(state), 'name', state.convertor.pattern.to)
            },
            output: {
                value: state.convertor.output,
                index: state.convertor.pattern.from,
                name: findField(getPatterns(state), 'name', state.convertor.pattern.from)
            },
            time: Date.now()
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePattern: (el, log) => {
            dispatch(changeToPattern(+ el.target.value, log))
            dispatch(saveToLog(log))
        }
    }
}

const PatternsData = connect(mapStateToProps, mapDispatchToProps)(Patterns);

export default PatternsData;
