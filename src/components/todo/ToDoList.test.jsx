import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ToDoList from './ToDoList';

const mockStore = configureMockStore([]);

it('renders without crashing', () => {
  const store = mockStore({
    toDoItemsReducer: [
      {
        content: 'Lorem ipsum dolor sit amet.',
        date: new Date(),
        done: false,
        favorite: false,
      },
    ],
    deleteListReducer: [
      {
        content: 'Lorem ipsum dolor sit amet2.',
        date: new Date(),
        done: true,
        favorite: false,
      },
    ],
    dateRangeReducer: {
      startDate: null,
      endDate: null,
    },
    favoriteCheckReducer: true,
  });
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><ToDoList /></Provider>, div);
});
