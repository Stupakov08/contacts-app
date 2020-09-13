import { combineReducers } from 'redux';
import * as reducers from './export-reducers';

export const reducer = combineReducers({
  ...reducers,
});
