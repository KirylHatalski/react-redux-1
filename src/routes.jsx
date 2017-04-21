import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import App from './components/App'
import NotFound from './common/404';

export default class Routes extends Component {
    render() {
        return (
          <Route path="/" component={App}>
              <IndexRoute component={Converter}/>
              <Route path="distance" component={Converter}/>
              <Route path="currency" component={Converter}/>
              <Route path="weight" component={Converter}/>
              <Route path="log" component={Log}/>
              <Route path="*" component={NotFound}/>
          </Route>
          <Route path="*" component={NotFound}/>
        );
    }
}
