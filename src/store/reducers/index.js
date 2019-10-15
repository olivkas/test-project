import { combineReducers } from 'redux';

import form from './form';
import data from './data';


export default combineReducers({
  form,
  data
});