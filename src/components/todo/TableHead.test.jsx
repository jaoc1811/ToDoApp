import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TableHead from './TableHead';

const mockStore = configureMockStore([]);

const favorite = false;

it('renders without crashing', () => {
  const store = mockStore({
    favoriteCheckReducer: false,
    dateRangeReducer: {
      startDate: null,
      endDate: null,
    },
  });
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <table>
        <thead>
          <TableHead favorite={favorite} />
        </thead>
      </table>
    </Provider>, div,
  );
});
