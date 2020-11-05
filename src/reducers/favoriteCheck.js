const favoriteCheckReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE-FILTER':
      return !state;
    default:
      return state;
  }
};

export default favoriteCheckReducer;
