import toDoItemsReducer from './toDoItems'
import deleteListReducer from './deleteList'
import dateRangeReducer from './dateRange'
import favoriteCheckReducer from './favoriteCheck'
import alertMessageReducer from './alertMessage'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  toDoItemsReducer,
  deleteListReducer,
  dateRangeReducer,
  favoriteCheckReducer,
  alertMessageReducer
});

export default allReducers;
