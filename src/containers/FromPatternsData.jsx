import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Patterns from '../components/Patterns';

import {changeFromPattern, getPatterns, saveToLog, findField} from '../actions';

function mapStateToProps(state) {
    return {
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
            dispatch(changeFromPattern(+ el.target.value))
            dispatch(saveToLog(log))
        }
    }
}

const PatternsData = connect(mapStateToProps, mapDispatchToProps)(Patterns);

export default PatternsData;
