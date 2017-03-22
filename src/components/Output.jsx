import React, {PropTypes} from 'react'
import PatternsData from '../containers/ToPatternsData'


const Output = ({output}) => {
  return (
          <div>
            {output}
            <PatternsData/>
          </div>
        )}

export default Output;
