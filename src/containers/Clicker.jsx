import React from 'react'
import {connect} from 'react-redux'
import {throwClick} from '../actions'

let Clicker = ({dispatch}) => {
    return (
        <div>
            <button onClick={() => dispatch(throwClick())}>ЖМАК</button>
        </div>
    )
}
// Clicker =

export default connect()(Clicker)
