import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Converter from '../components/Converter';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

const ConverterData = connect(mapStateToProps, mapDispatchToProps)(Converter);

export default ConverterData;
