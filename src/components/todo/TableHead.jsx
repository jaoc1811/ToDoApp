import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

// Custom datePicker css
import '../../datePicker.css';

// Components
import StartDateInput from '../datepicker/StartDateInput';
import EndDateInput from '../datepicker/EndDateInput';

/**
 * Render head todos f done
 * @param {*} props
 */
const TableHead = (props) => {
  const dateRange = useSelector((state) => state.dateRangeReducer);

  const favoriteCheck = useSelector((state) => state.favoriteCheckReducer);

  const dispatch = useDispatch();

  const updateStartDate = (date) => {
    dispatch({ type: 'DATE-UPDATE-START', payload: date });
  };

  const updateEndDate = (date) => {
    dispatch({ type: 'DATE-UPDATE-END', payload: date });
  };

  const toggleFavoriteCheck = () => {
    dispatch({ type: 'TOGGLE-FILTER' });
  };

  const { favorite } = props;

  return (
    <tr>
      {!favorite && (
        <th className="text-center align-middle" style={{ width: '10%' }}>Actions</th>
      )}
      <th style={{ width: '45%' }} className="align-middle">Description</th>
      <th style={{ width: '35%' }}>
        <div className="d-flex justify-content-around align-items-center">
          <span className="mr-2">Date</span>
          <DatePicker
            selected={dateRange.startDate}
            onChange={(date) => updateStartDate(date)}
            selectsStart
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            isClearable
            customInput={<StartDateInput />}
            className="mx-1"
          />
          <DatePicker
            selected={dateRange.endDate}
            onChange={(date) => updateEndDate(date)}
            selectsEnd
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            minDate={dateRange.startDate}
            isClearable
            customInput={<EndDateInput />}
            className="mx-1"
          />
        </div>
      </th>
      <th className="text-center align-middle" style={{ width: '5%' }}>
        <div className="d-flex justify-content-between align-items-center">
          Favorite
          {!favorite && (
            <input type="checkbox" className="ml-4 mt-1" checked={favoriteCheck} onChange={toggleFavoriteCheck} />
          )}
        </div>
      </th>
      <th className="text-center align-middle" style={{ width: '5%' }}>Done</th>
    </tr>
  );
};

TableHead.propTypes = {
  // Boolean used to show actions and favorite filter only in the all todo list
  favorite: PropTypes.bool.isRequired,
};

export default TableHead;
