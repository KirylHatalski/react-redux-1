import React, {PropTypes} from 'react'
import PatternsData from '../containers/ToPatternsData'

const Output = ({output}) => {
    return (
        <div>
            <span className='output-value'>{output}</span>

            <PatternsData/>
        </div>
    )
}

export default Output;
