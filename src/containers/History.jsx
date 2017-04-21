import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Log from '../components/Log';
import { getFromLog, initGetFromLog, saveToLog } from "../actions"

function mapStateToProps(state) {
  return {
    history: state.convertor.log,
    path: state.routing.locationBeforeTransitions.pathname
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setActive: (value) => {
      dispatch(initGetFromLog(value))
      dispatch(saveToLog(value)) //sdfsdaf
    }
  }
}

const History = connect(mapStateToProps, mapDispatchToProps)(Log);

export default History;
