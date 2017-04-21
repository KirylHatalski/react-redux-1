import React, {PropTypes} from 'react'

import Pattern from './Pattern'

const Patterns = ({changePattern, patterns, current}) => (
    <select onChange={(e) => {changePattern(e, current)}} className='pattern'>
        {patterns.map((val, index) => {
            return (<Pattern value={val} key={index}/>)
        })}
    </select>
)

export default Patterns;
