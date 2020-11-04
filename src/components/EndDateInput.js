import React, { Component } from 'react'

// Class created because customInput from react datepicker throws and error with sfc 


export default class EndDateInput extends Component {
  render() {
    const {
      onClick,
      value,
    } = this.props;

    return (
      <button className="btn btn-primary btn-sm" onClick={onClick}>
        {value || 'End Date'}
      </button>
    )
  }
}
