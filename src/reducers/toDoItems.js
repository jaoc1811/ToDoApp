const toDoItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INSERT':
      return [...state, action.payload]
    case 'TOGGLE-FAVORITE':
      return state.map(todo => (
        todo.content === action.payload ? { ...todo, favorite: !todo.favorite } : todo
      ))
    case 'TOGGLE-DONE':
      return state.map(todo => (
        todo.content === action.payload ? { ...todo, done: !todo.done } : todo
      ))
    default:
      return state;
  }
}

export default toDoItemsReducer;