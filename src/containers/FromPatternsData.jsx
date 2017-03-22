import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Patterns from '../components/Patterns';

import {changeFromPattern} from '../actions';

function mapStateToProps(state) {
  return {
    pattern: 1000
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changePattern: (el) => {
      dispatch(changeFromPattern(+el.target.value))
    }
  }
}

const PatternsData = connect(mapStateToProps, mapDispatchToProps)(Patterns);

export default PatternsData;
