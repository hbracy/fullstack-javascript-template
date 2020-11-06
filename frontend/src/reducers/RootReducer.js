import { combineReducers } from 'redux'
import NetworkReducer from './NetworkReducer.js'
import {reducer as notifications} from 'react-notification-system-redux';

const appReducer = combineReducers({
  NetworkReducer,
  notifications
});


export default function RootReducer(state, action) {
  return appReducer(state, action)
}
