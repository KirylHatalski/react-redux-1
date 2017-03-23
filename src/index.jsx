require('./styles')

import React from 'react'
import Routes from './routes';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import configureStore from './store/configureStore'

let store = configureStore({})

render(
    <Provider store={store}>
      <Routes/>
    </Provider>, document.getElementById('root')
)
