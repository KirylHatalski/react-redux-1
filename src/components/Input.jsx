import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

import InputData from '../containers/InputData';
import PatternsData from '../containers/FromPatternsData'

const Input = ({changeInput}) => (
  <div>
      <input type='number' onChange={changeInput}/>

      <PatternsData/>
  </div>
)

export default Input;
