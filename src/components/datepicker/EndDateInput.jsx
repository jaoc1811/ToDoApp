import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Class created because customInput from react datepicker throws and error with sfc
// Render a button for the datePicker input

// eslint-disable-next-line react/prefer-stateless-function
export default class EndDateInput extends Component {
  render() {
    const {
      onClick,
      value,
    } = this.props;

    return (
      <button type="button" className="btn btn-primary btn-sm" onClick={onClick}>
        {value || 'End Date'}
      </button>
    );
  }
}

EndDateInput.defaultProps = {
  onClick: null,
  value: null,
};

EndDateInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};
