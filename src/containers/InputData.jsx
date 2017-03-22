import React, {PropTypes} from 'react'
import Input from '../components/Input';
import {connect} from 'react-redux'

import { changeInput } from '../actions';


function mapStateToProps(state) {
    return {
      // state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeInput: (el) => {
          dispatch(changeInput(el.target.value))
        }
    }
}

const InputData = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputData;
