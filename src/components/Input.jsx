import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

import InputData from '../containers/InputData';

class Input extends React.Component {
    render() {
        return (<InputData/>)
    }
}

export default connect()(Input);
