import React, {PropTypes} from 'react'

const Pattern = (props) => {
    return (
        <option value={props.value.index}>
            {props.value.name}
        </option>
    )
}
export default Pattern;
