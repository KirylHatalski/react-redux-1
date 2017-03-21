import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

import OutputData from '../containers/OutputData';

class Output extends React.Component {
    render() {
        return (<OutputData/>)
    }
}

export default connect()(Output);
