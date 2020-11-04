const toDoItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET':
      return action.payload.map(todo => (
        {...todo, date: new Date(todo.date)}
      ))
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
    case 'EDIT':
      return state.map(todo =>(
        todo.content === action.payload.old ? {...todo, content: action.payload.new} : todo
      ))
    case 'DELETE':
      return state.filter( todo => !action.payload.includes(todo))
    default:
      return state;
  }
}

export default toDoItemsReducer;