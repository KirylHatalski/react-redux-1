import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Patterns from '../components/Patterns';

import {changeToPattern} from '../actions';

function mapStateToProps(state) {
    return {pattern: 1}
}

function mapDispatchToProps(dispatch) {
    return {
        changePattern: (el) => {
            dispatch(changeToPattern(+ el.target.value))
        }
    }
}

const PatternsData = connect(mapStateToProps, mapDispatchToProps)(Patterns);

export default PatternsData;
