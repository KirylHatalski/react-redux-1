import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Pattern from '../containers/Pattern'
import {changePattern} from '../actions'

class Patterns extends React.Component {

    _changePattern(el) {
        changePattern(el.target.value);
    }

    render() {
        let patterns = [
            {
                name: 'mm',
                index: 100
            }, {
                name: 'cm',
                index: 10
            }, {
                name: 'm',
                index: 1
            }
        ];
        return (
            <select onChange={this._changePattern} ref={(el) => {
                changePattern(el.value)
            }}>
                {patterns.map((val, index) => {
                    return (<Pattern value={val} key={index}/>)
                })}
            </select>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        changePattern: bindActionCreators(changePattern, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Patterns)
