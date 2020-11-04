const dateRangeReducer = (state = { startDate: null, endDate: null }, action) => {
  switch (action.type) {
    case 'DATE/UPDATESTART':
      return { ...state, startDate: action.payload }
    case 'DATE/UPDATEEND':
      return { ...state, endDate: action.payload }
    default:
      return state;
  }
}

export default dateRangeReducer;