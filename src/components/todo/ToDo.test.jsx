import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ToDo from './ToDo';

const mockStore = configureMockStore([]);

const favorite = false;

const todo = {
  content: 'Lorem ipsum dolor sit amet.',
  date: new Date(),
  done: false,
  favorite: false,
};

it('renders without crashing', () => {
  const store = mockStore({
    deleteListReducer: [
      {
        content: 'Lorem ipsum dolor sit amet.',
        date: new Date(),
        done: false,
        favorite: false,
      },
    ],
    toDoItemsReducer: [
      {
        content: 'Lorem ipsum dolor sit amet2.',
        date: new Date(),
        done: false,
        favorite: false,
      },
    ],
  });
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <table>
        <tbody>
          <ToDo favorite={favorite} todo={todo} />
        </tbody>
      </table>
    </Provider>, div,
  );
});
