import favoriteCheckReducer from './favoriteCheck';

describe('favoriteCheck reducer', () => {
  it('should return the initial state', () => {
    expect(favoriteCheckReducer(undefined, {})).toEqual(false);
  });

  it('should handle TOGGLE-FILTER', () => {
    expect(
      favoriteCheckReducer(
        false,
        {
          type: 'TOGGLE-FILTER',
        },
      ),
    ).toEqual(true);
  });
});
