import * as actions from '.';

describe('toDoItems actions', () => {
  it('should create an action to set toDoItems', () => {
    const todoList = [
      {
        content: 'Lorem ipsum dolor sit amet.',
        date: new Date(),
        done: false,
        favorite: false,
      },
    ];

    const expectedAction = {
      type: 'SET',
      payload: todoList,
    };

    expect(actions.set(todoList)).toEqual(expectedAction);
  });

  it('should create an action to insert a todo to toDoItems', () => {
    const todo = {
      content: 'Lorem ipsum dolor sit amet.',
      date: new Date(),
      done: false,
      favorite: false,
    };

    const expectedAction = {
      type: 'INSERT',
      payload: todo,
    };

    expect(actions.insert(todo)).toEqual(expectedAction);
  });

  it('should create an action to toggle todo\'s favorite', () => {
    const todoContent = 'Todo Content';

    const expectedAction = {
      type: 'TOGGLE-FAVORITE',
      payload: todoContent,
    };

    expect(actions.toggleFavorite(todoContent)).toEqual(expectedAction);
  });

  it('should create an action to toggle todo\'s done', () => {
    const todoContent = 'Todo Content';

    const expectedAction = {
      type: 'TOGGLE-DONE',
      payload: todoContent,
    };

    expect(actions.toggleDone(todoContent)).toEqual(expectedAction);
  });

  it('should create an action to edit a todo', () => {
    const todoContents = {
      old: 'Old todo content',
      new: 'New todo content',
    };

    const expectedAction = {
      type: 'EDIT',
      payload: todoContents,
    };

    expect(actions.edit(todoContents)).toEqual(expectedAction);
  });

  it('should create an action to delete todos', () => {
    const todoList = [
      {
        content: 'Lorem ipsum dolor sit amet.',
        date: new Date(),
        done: false,
        favorite: false,
      },
    ];

    const expectedAction = {
      type: 'DELETE',
      payload: todoList,
    };

    expect(actions.deleteToDo(todoList)).toEqual(expectedAction);
  });
});

describe('deleteList actions', () => {
  it('should create an action to insert todo in deleteList', () => {
    const todo = {
      content: 'Lorem ipsum dolor sit amet.',
      date: new Date(),
      done: false,
      favorite: false,
    };

    const expectedAction = {
      type: 'DELETE-INSERT',
      payload: todo,
    };

    expect(actions.insertToDelete(todo)).toEqual(expectedAction);
  });

  it('should create an action to remove todo from deleteList', () => {
    const todoContent = 'Lorem ipsum dolor sit amet.';

    const expectedAction = {
      type: 'DELETE-REMOVE',
      payload: todoContent,
    };

    expect(actions.removeFromDelete(todoContent)).toEqual(expectedAction);
  });

  it('should create an action to restart todoList', () => {
    const expectedAction = {
      type: 'DELETE-RESTART',
    };

    expect(actions.restartDelete()).toEqual(expectedAction);
  });
});

describe('dateRange actions', () => {
  it('should create an action to update startDate', () => {
    const startDate = new Date();

    const expectedAction = {
      type: 'DATE-UPDATE-START',
      payload: startDate,
    };

    expect(actions.startDateUpdate(startDate)).toEqual(expectedAction);
  });

  it('should create an action to update endDate', () => {
    const endDate = new Date();

    const expectedAction = {
      type: 'DATE-UPDATE-END',
      payload: endDate,
    };

    expect(actions.endDateUpdate(endDate)).toEqual(expectedAction);
  });
});

describe('favoriteCheck actions', () => {
  it('should create an action to toggle favoriteFilter check', () => {
    const expectedAction = {
      type: 'TOGGLE-FILTER',
    };

    expect(actions.toggleFavoriteFilter()).toEqual(expectedAction);
  });
});

describe('alertMessage actions', () => {
  it('should create an action to hide alert', () => {
    const expectedAction = {
      type: 'HIDE',
    };

    expect(actions.hideAlert()).toEqual(expectedAction);
  });

  it('should create an action to show alert', () => {
    const expectedAction = {
      type: 'SHOW',
    };

    expect(actions.showAlert()).toEqual(expectedAction);
  });
});
