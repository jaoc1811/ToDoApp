import React from 'react';
import ReactDOM from 'react-dom';
import EndDateInput from './EndDateInput';

const value = '11/18/2020';

const mockFunc = () => {

};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EndDateInput value={value} onClick={mockFunc} />, div);
});
