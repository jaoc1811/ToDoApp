import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

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
    alertMessageReducer: {
      show: true,
      head: 'Couldn\'t edit to-do ',
      body: 'To-do needs content to be edited',
      variant: 'danger',
    },
  });
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
