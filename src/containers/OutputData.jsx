import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Output from '../components/Output';

function mapStateToProps(state) {
    return {
      output: state.convertor.output
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

const OutputData = connect(mapStateToProps, mapDispatchToProps)(Output);

export default OutputData;
