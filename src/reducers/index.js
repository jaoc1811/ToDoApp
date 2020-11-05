import { combineReducers } from 'redux';
import toDoItemsReducer from './toDoItems';
import deleteListReducer from './deleteList';
import dateRangeReducer from './dateRange';
import favoriteCheckReducer from './favoriteCheck';
import alertMessageReducer from './alertMessage';

const allReducers = combineReducers({
  toDoItemsReducer,
  deleteListReducer,
  dateRangeReducer,
  favoriteCheckReducer,
  alertMessageReducer,
});

export default allReducers;
