/**
 * Handles deleteListReducer state and actions, used to filter
 * todos by favorite
 */
const favoriteCheckReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE-FILTER':
      return !state;
    default:
      return state;
  }
};

export default favoriteCheckReducer;
