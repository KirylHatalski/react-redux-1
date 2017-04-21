import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux';

import convertor from './convertor';

const rootReducer = combineReducers({routing: routerReducer, convertor})

export default rootReducer
