import React, {PropTypes} from 'react'
import Patterns from '../components/Patterns';

const InputData = (props) => {
    return (
        <div>
            <input type='number' value='' placeholder='input number'/>
            <Patterns/>
        </div>
    )
}

export default InputData
