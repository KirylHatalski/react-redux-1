
import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import InputData from '../containers/InputData';
import OutputData from '../containers/OutputData';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
              <div className='input'>
                <InputData/>
              </div>
              <span className='compare'>===</span>
              <div className='output'>
                  <OutputData/>
              </div>
            </div>
        )
    }
}

export default connect()(App);
