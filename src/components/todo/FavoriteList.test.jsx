import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import FavoriteList from './FavoriteList';

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
    dateRangeReducer: {
      startDate: null,
      endDate: null,
    },
  });
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><FavoriteList /></Provider>, div);
});
