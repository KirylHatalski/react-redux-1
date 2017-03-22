import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import InputData from '../containers/InputData';
import OutputData from '../containers/OutputData';

class App extends React.Component {
    render() {
        return (
            <div>
                <InputData/>
                <OutputData/>
            </div>
        )
    }
}

export default connect()(App);
