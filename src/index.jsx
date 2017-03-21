require('./styles')

// import ReactDOM from 'react-dom';
import Routes from './routes';
//
// ReactDOM.render(
//     <Routes/>, document.querySelector('#root'));

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import rootReducer from './reducers'
import configureStore from './store/configureStore'
// import App from './components/App'

let store = configureStore({})

render(
    <Provider store={store}>
    <Routes/>
</Provider>, document.getElementById('root'))
