import React, {PropTypes} from 'react'

import Pattern from './Pattern'
const patterns =  [
      {index: 1000, name: 'mm'},
      {index: 100, name: 'cm'},
      {index: 10, name: 'dm'},
      {index: 1, name: 'm'},
    ]

const Patterns = ({changePattern}) => (
  <select
    onChange={changePattern}
  >
      {patterns.map((val, index) => {
          return (<Pattern value={val} key={index}/>)
      })}
  </select>
)

export default Patterns;
