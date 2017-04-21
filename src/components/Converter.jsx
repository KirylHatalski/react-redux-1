import React, {PropTypes} from 'react'
import InputData from '../containers/InputData';
import OutputData from '../containers/OutputData';
import History from '../containers/History'

const Converter = () => (
    <div>
        <div className='input'>
            <InputData/>
        </div>
        <span className='compare'>===</span>
        <div className='output'>
            <OutputData/>
        </div>
        <History />
    </div>

)

export default Converter;
