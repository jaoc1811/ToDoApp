import toDoItemsReducer from './toDoItems'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  toDoItemsReducer
});

export default allReducers;
