const alertMessageReducer = (state = {
  show: false, head: '', body: '', variant: '',
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
