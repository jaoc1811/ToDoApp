export const set = (todoList) => {
  return {
    type: 'SET',
    payload: todoList
  }
}

export const insert = (todo) => {
  return {
    type: 'INSERT',
    payload: todo
  }
}

export const toggleFavorite = (todoContent) => {
  return {
    type: 'TOGGLE-FAVORITE',
    payload: todoContent
  }
}

export const toggleDone = (todoContent) => {
  return {
    type: 'TOGGLE-DONE',
    payload: todoContent
  }
}

export const edit = todoContents => {
  return {
    type: 'EDIT',
    payload: todoContents
  }
}

export const deleteToDo = (todoList) => {
  return {
    type: 'DELETE',
    payload: todoList
  }
}

export const insertToDelete = (todo) => {
  return {
    type: 'DELETE/INSERT',
    payload: todo
  }
}

export const removeFromDelete = (todoContent) => {
  return {
    type: 'DELETE/REMOVE',
    payload: todoContent
  }
}

export const restartDelete = () => {
  return {
    type: 'DELETE/RESTART'
  }
}

export const startDateUpdate = startDate => {
  return {
    type: 'DATE/UPDATESTART',
    payload: startDate
  }
}

export const endDateUpdate = endDate => {
  return {
    type: 'DATE/UPDATEEND',
    payload: endDate
  }
}

export const toggleFavoriteFilter = () => {
  return {
    type: 'TOGGLE-FILTER'
  }
}

export const hideAlert = () => {
  return {
    type: 'HIDE'
  }
}

export const showAlert = alert => {
  return {
    type: 'SHOW',
    payload: alert
  }
}




