/**
 * Action that sets toDoItems to a list.
 * Used to set the localStorage as the state
 * @param {*} todoList
 */
export const set = (todoList) => ({
  type: 'SET',
  payload: todoList,
});

/**
 * Action that insert a new todo in toDoItems list
 * @param {*} todo
 */
export const insert = (todo) => ({
  type: 'INSERT',
  payload: todo,
});

/**
 * Action that toggle favorite boolean in a given todo
 * @param {*} todoContent
 */
export const toggleFavorite = (todoContent) => ({
  type: 'TOGGLE-FAVORITE',
  payload: todoContent,
});

/**
 * Action that toggle done boolean in a given todo
 * @param {*} todoContent
 */
export const toggleDone = (todoContent) => ({
  type: 'TOGGLE-DONE',
  payload: todoContent,
});

/**
 * Action that updates a todo, setting a new content
 * @param {*} todoContents
 */
export const edit = (todoContents) => ({
  type: 'EDIT',
  payload: todoContents,
});

/**
 * Action that delete a set of todos from toDoItems list
 * @param {*} todoList
 */
export const deleteToDo = (todoList) => ({
  type: 'DELETE',
  payload: todoList,
});

/**
 * Action that insert a todo in the set of todos that will be deleted
 * @param {*} todo
 */
export const insertToDelete = (todo) => ({
  type: 'DELETE-INSERT',
  payload: todo,
});

/**
 * Action that removes a todo in the set of todos that will be deleted
 * @param {*} todo
 */
export const removeFromDelete = (todoContent) => ({
  type: 'DELETE-REMOVE',
  payload: todoContent,
});

/**
 * Action that reestablish the delete List to an empty list
 */
export const restartDelete = () => ({
  type: 'DELETE-RESTART',
});

/**
 * Action that updates the startDate from the dateRange
 * @param {*} startDate
 */
export const startDateUpdate = (startDate) => ({
  type: 'DATE-UPDATE-START',
  payload: startDate,
});

/**
 * Action that updates the endDate from the dateRange
 * @param {*} startDate
 */
export const endDateUpdate = (endDate) => ({
  type: 'DATE-UPDATE-END',
  payload: endDate,
});

/**
 * Action that toggles the favorite boolean for the favorite filter
 */
export const toggleFavoriteFilter = () => ({
  type: 'TOGGLE-FILTER',
});

/**
 * Action that hides the showing alert
 */
export const hideAlert = () => ({
  type: 'HIDE',
});

/**
 * Action that set alert data, and shows it
 * @param {*} alert
 */
export const showAlert = (alert) => ({
  type: 'SHOW',
  payload: alert,
});
