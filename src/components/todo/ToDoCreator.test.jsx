import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ToDoCreator from './ToDoCreator';

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
  });
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><ToDoCreator /></Provider>, div);
});
