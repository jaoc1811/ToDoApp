const deleteListReducer = (state = [], action) => {
  switch (action.type) {
    case 'DELETE-INSERT':
      return [...state, action.payload];
    case 'DELETE-REMOVE':
      return state.filter((e) => e.content !== action.payload);
    case 'DELETE-RESTART':
      return [];
    default:
      return state;
  }
};

export default deleteListReducer;
