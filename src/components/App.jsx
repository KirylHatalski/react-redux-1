import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux';
import ConverterData from '../containers/ConverterData';
import {Menu} from 'semantic-ui-react';

const App = (props) => {
    return (

        <div className='wrapper'>
            <div className='tabs'>
                <Link to='/currency' className='tab' activeClassName='active'><span>Currency</span></Link>
                <Link to='/weight' className='tab' activeClassName='active'><span>Weight</span></Link>
                <Link to='/distance' className='tab' activeClassName='active'><span>Lenght</span></Link>
                <Link to='/history' className='tab' activeClassName='active'><span>Log</span></Link>
            </div>

            <div className='container'>
              {props.children}
            </div>
        </div>
    )
}

export default connect()(App);
