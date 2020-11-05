import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render head of done todos table
 * @param {*} props
 */
const DoneTableHead = (props) => {
  const { favorite } = props;

  return (
    <tr>
      {!favorite && (
        <th className="text-center align-middle" style={{ width: '10%' }}>Actions</th>
      )}
      <th style={{ width: '45%' }} className="align-middle">Description</th>
      <th style={{ width: '35%' }}>Date</th>
      <th className="text-center align-middle" style={{ width: '5%' }}>Favorite</th>
      <th className="text-center align-middle" style={{ width: '5%' }}>Done</th>
    </tr>
  );
};

DoneTableHead.propTypes = {
  favorite: PropTypes.bool.isRequired, // Boolean used to show actions only in the all todo list
};

export default DoneTableHead;
