import { combineReducers } from 'redux';
import fetchReducer from './reducer_fetch';

const rootReducer = combineReducers({
  weather: fetchReducer
});

export default rootReducer;
