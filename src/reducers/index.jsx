import {combineReducers} from 'redux'

import start from './start'
import convertor from './convertor';

const rootReducer = combineReducers({start, convertor})

export default rootReducer
