import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Class created because customInput from react datepicker throws and error with sfc
// Render a button for the datePicker input

// eslint-disable-next-line react/prefer-stateless-function
export default class StartDateInput extends Component {
  render() {
    const {
      onClick,
      value,
    } = this.props;

    return (
      <button type="button" className="btn btn-primary btn-sm" onClick={onClick}>
        {value || 'Start Date'}
      </button>
    );
  }
}

StartDateInput.defaultProps = {
  onClick: null,
  value: null,
};

StartDateInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};
