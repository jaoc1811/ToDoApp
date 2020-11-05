const dateRangeReducer = (state = { startDate: null, endDate: null }, action) => {
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
