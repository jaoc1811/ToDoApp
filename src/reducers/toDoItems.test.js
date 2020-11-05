import toDoItemsReducer from './toDoItems';

describe('toDoItems reducer', () => {
  it('should return the initial state', () => {
    expect(toDoItemsReducer(undefined, {})).toEqual([]);
  });

  it('should handle SET', () => {
    const date = new Date();
    expect(
      toDoItemsReducer(
        [

        ],
        {
          type: 'SET',
          payload: [
            {
              content: 'Todo content',
              date,
              done: false,
              favorite: false,
            },
            {
              content: 'Todo content 2',
              date,
              done: false,
              favorite: false,
            },
          ],
        },
      ),
    ).toEqual([
      {
        content: 'Todo content',
        date,
        done: false,
        favorite: false,
      },
      {
        content: 'Todo content 2',
        date,
        done: false,
        favorite: false,
      },
    ]);
  });

  it('should handle INSERT', () => {
    const date = new Date();
    expect(
      toDoItemsReducer(
        [
          {
            content: 'Todo content',
            date,
            done: false,
            favorite: false,
          },
        ],
        {
          type: 'INSERT',
          payload: {
            content: 'Todo content 2',
            date,
            done: false,
            favorite: false,
          },
        },
      ),
    ).toEqual([
      {
        content: 'Todo content',
        date,
        done: false,
        favorite: false,
      },
      {
        content: 'Todo content 2',
        date,
        done: false,
        favorite: false,
      },
    ]);
  });

  it('should handle TOGGLE-FAVORITE', () => {
    const date = new Date();
    expect(
      toDoItemsReducer(
        [
          {
            content: 'Todo content',
            date,
            done: false,
            favorite: false,
          },
          {
            content: 'Todo content 2',
            date,
            done: false,
            favorite: false,
          },
        ],
        {
          type: 'TOGGLE-FAVORITE',
          payload: 'Todo content',
        },
      ),
    ).toEqual([
      {
        content: 'Todo content',
        date,
        done: false,
        favorite: true,
      },
      {
        content: 'Todo content 2',
        date,
        done: false,
        favorite: false,
      },
    ]);
  });

  it('should handle TOGGLE-DONE', () => {
    const date = new Date();
    expect(
      toDoItemsReducer(
        [
          {
            content: 'Todo content',
            date,
            done: false,
            favorite: false,
          },
          {
            content: 'Todo content 2',
            date,
            done: false,
            favorite: false,
          },
        ],
        {
          type: 'TOGGLE-DONE',
          payload: 'Todo content',
        },
      ),
    ).toEqual([
      {
        content: 'Todo content',
        date,
        done: true,
        favorite: false,
      },
      {
        content: 'Todo content 2',
        date,
        done: false,
        favorite: false,
      },
    ]);
  });

  it('should handle EDIT', () => {
    const date = new Date();
    expect(
      toDoItemsReducer(
        [
          {
            content: 'Old Todo content',
            date,
            done: false,
            favorite: false,
          },
          {
            content: 'Todo content 2',
            date,
            done: false,
            favorite: false,
          },
        ],
        {
          type: 'EDIT',
          payload: {
            old: 'Old Todo content',
            new: 'New todo content',
          },
        },
      ),
    ).toEqual([
      {
        content: 'New todo content',
        date,
        done: false,
        favorite: false,
      },
      {
        content: 'Todo content 2',
        date,
        done: false,
        favorite: false,
      },
    ]);
  });

  it('should hande DELETE', () => {
    const date = new Date();
    const todo1 = {
      content: 'Todo content',
      date,
      done: true,
      favorite: false,
    };
    const todo2 = {
      content: 'Todo content 2',
      date,
      done: true,
      favorite: false,
    };
    const todo3 = {
      content: 'Todo content 3',
      date,
      done: true,
      favorite: false,
    };
    expect(
      toDoItemsReducer(
        [
          todo1,
          todo2,
          todo3,
        ],
        {
          type: 'DELETE',
          payload: [
            todo2,
            todo3,
          ],
        },
      ),
    ).toEqual([
      todo1,
    ]);
  });
});
