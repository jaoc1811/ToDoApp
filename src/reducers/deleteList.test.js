import deleteListReducer from './deleteList';

describe('deleteList reducer', () => {
  it('should return the initial state', () => {
    expect(deleteListReducer(undefined, {})).toEqual([]);
  });

  it('should handle DELETE-INSERT', () => {
    const date = new Date();
    expect(
      deleteListReducer(
        [

        ],
        {
          type: 'DELETE-INSERT',
          payload: {
            content: 'Todo content',
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
    ]);
  });

  it('should handle DELETE-REMOVE', () => {
    const date = new Date();
    expect(
      deleteListReducer(
        [
          {
            content: 'Todo content',
            date,
            done: false,
            favorite: false,
          },
          {
            content: 'Todo content2',
            date,
            done: false,
            favorite: false,
          },
        ],
        {
          type: 'DELETE-REMOVE',
          payload: 'Todo content',
        },
      ),
    ).toEqual([
      {
        content: 'Todo content2',
        date,
        done: false,
        favorite: false,
      },
    ]);
  });

  it('should handle DELETE-RESTART', () => {
    const date = new Date();
    expect(
      deleteListReducer(
        [
          {
            content: 'Todo content',
            date,
            done: false,
            favorite: false,
          },
          {
            content: 'Todo content2',
            date,
            done: false,
            favorite: false,
          },
        ],
        {
          type: 'DELETE-RESTART',
        },
      ),
    ).toEqual([]);
  });
});
