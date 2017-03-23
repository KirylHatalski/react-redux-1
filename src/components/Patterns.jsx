import React, {PropTypes} from 'react'

import Pattern from './Pattern'
const patterns = [
    {
        index: 1,
        name: 'mm'
    }, {
        index: 10,
        name: 'cm'
    }, {
        index: 100,
        name: 'dm'
    }, {
        index: 1000,
        name: 'm'
    }
]

const Patterns = ({changePattern}) => (
    <select onChange={changePattern} className='pattern'>
        {patterns.map((val, index) => {
            return (<Pattern value={val} key={index}/>)
        })}
    </select>
)

export default Patterns;
