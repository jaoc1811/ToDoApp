export const set = (todoList) => ({
  type: 'SET',
  payload: todoList,
});

export const insert = (todo) => ({
  type: 'INSERT',
  payload: todo,
});

export const toggleFavorite = (todoContent) => ({
  type: 'TOGGLE-FAVORITE',
  payload: todoContent,
});

export const toggleDone = (todoContent) => ({
  type: 'TOGGLE-DONE',
  payload: todoContent,
});

export const edit = (todoContents) => ({
  type: 'EDIT',
  payload: todoContents,
});

export const deleteToDo = (todoList) => ({
  type: 'DELETE',
  payload: todoList,
});

export const insertToDelete = (todo) => ({
  type: 'DELETE-INSERT',
  payload: todo,
});

export const removeFromDelete = (todoContent) => ({
  type: 'DELETE-REMOVE',
  payload: todoContent,
});

export const restartDelete = () => ({
  type: 'DELETE-RESTART',
});

export const startDateUpdate = (startDate) => ({
  type: 'DATE-UPDATE-START',
  payload: startDate,
});

export const endDateUpdate = (endDate) => ({
  type: 'DATE-UPDATE-END',
  payload: endDate,
});

export const toggleFavoriteFilter = () => ({
  type: 'TOGGLE-FILTER',
});

export const hideAlert = () => ({
  type: 'HIDE',
});

export const showAlert = (alert) => ({
  type: 'SHOW',
  payload: alert,
});
