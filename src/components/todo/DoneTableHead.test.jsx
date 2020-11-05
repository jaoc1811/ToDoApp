import React from 'react';
import ReactDOM from 'react-dom';
import DoneTableHead from './DoneTableHead';

const favorite = true;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<table><thead><DoneTableHead favorite={favorite} /></thead></table>, div);
});
