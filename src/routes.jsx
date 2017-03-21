import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/App'
import NotFound from './common/404';

export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="*" component={NotFound}/>
                </Route>
                <Route path="*" component={NotFound}/>
            </Router>
        );
    }
}
