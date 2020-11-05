/**
 * Handles alertMessage state and actions
 */
const alertMessageReducer = (state = {
  show: false, // Boolean that controls if alert should be showing
  head: '', // Head of the message
  body: '', // Body of the message
  variant: '', // Variante of the message ("danger" and "success" variants used)
}, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.payload;
    case 'HIDE':
      return { ...state, show: false };
    default:
      return state;
  }
};

export default alertMessageReducer;
