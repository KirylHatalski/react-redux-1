import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import Clicker from '../containers/Clicker';
import Input from '../components/Input';
import Output from '../components/Output';

class App extends React.Component {
    render() {
        return (
            <div>
                <Clicker/>
                <div className='container'>
                    <Input className='input'/>
                    ==
                    <Output className='output'/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {test: state}
}

export default connect(mapStateToProps)(App);
