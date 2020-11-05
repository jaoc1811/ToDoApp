/**
 * Handles dateRangeReducer state and actions, used to filter todos by date
 */
const dateRangeReducer = (state = {
  startDate: null, // Start date of the range
  endDate: null, // End date of the range
}, action) => {
  switch (action.type) {
    case 'DATE-UPDATE-START':
      return { ...state, startDate: action.payload };
    case 'DATE-UPDATE-END':
      return { ...state, endDate: action.payload };
    default:
      return state;
  }
};

export default dateRangeReducer;
