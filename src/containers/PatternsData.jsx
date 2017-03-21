import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

const PatternsData = ({dispath}) => {
    console.log(this.props);
    return (
        <div/>
    // {this.props.patterns.map((val, index) => {
    //     return (<Pattern value={val} key={index}/>)
    // })}
    )
}

export default connect()(PatternsData)
