import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

import InputData from '../containers/InputData';
import PatternsData from '../containers/FromPatternsData'

const Input = ({changeInput}) => (
    <div>
        <div className='input-value'>
            <input type='number' onChange={changeInput} size='5' placeholder='type here'/>
        </div>

        <PatternsData/>
    </div>
)

export default Input;
