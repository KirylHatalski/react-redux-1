require('./styles')

import React from 'react'
// import Routes from './routes';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import configureStore from './store/configureStore'
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App'
import Converter from './components/Converter'
import ConverterData from './containers/ConverterData';
import Log from './components/Log';
import History from './containers/History'
import NotFound from './common/404';

const store = configureStore({})
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={ConverterData}/>
          <Route path="distance" component={ConverterData}/>
          <Route path="currency" component={ConverterData}/>
          <Route path="weight" component={ConverterData}/>
          <Route path="history" component={History}/>
          <Route path="*" component={NotFound}/>
        </Route>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>, document.getElementById('root')
)
