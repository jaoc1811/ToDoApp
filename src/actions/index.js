export const insert = (todo) => {
  return {
    type: 'INSERT',
    payload: todo
  }
}

export const toggleFavorite = (todo) => {
  return {
    type: 'TOGGLE-FAVORITE',
    payload: todo
  }
}

export const toggleDone = (todo) => {
  return {
    type: 'TOGGLE-DONE',
    payload: todo
  }
}