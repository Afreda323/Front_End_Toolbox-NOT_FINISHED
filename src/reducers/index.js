import {combineReducers} from 'redux';
import checklist from './checklist'

const indexReducer = combineReducers({
  checklist: checklist
})

export default indexReducer;
