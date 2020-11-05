import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AlertMessage from './AlertMessage';

const mockStore = configureMockStore([]);

it('renders without crashing', () => {
  const store = mockStore({
    alertMessageReducer: {
      show: true,
      head: 'Couldn\'t edit to-do ',
      body: 'To-do needs content to be edited',
      variant: 'danger',
    },
  });
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><AlertMessage /></Provider>, div);
});
