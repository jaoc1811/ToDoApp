import dateRangeReducer from './dateRange';

describe('dateRange reducer', () => {
  it('should return the initial state', () => {
    expect(dateRangeReducer(undefined, {})).toEqual({
      startDate: null,
      endDate: null,
    });
  });

  it('should handle DATE-UPDATE-START', () => {
    const date = new Date();
    expect(
      dateRangeReducer(
        {
          startDate: null,
          endDate: null,
        },
        {
          type: 'DATE-UPDATE-START',
          payload: date,
        },
      ),
    ).toEqual({
      startDate: date,
      endDate: null,
    });
  });

  it('should handle DATE-UPDATE-END', () => {
    const date = new Date();
    expect(
      dateRangeReducer(
        {
          startDate: null,
          endDate: null,
        },
        {
          type: 'DATE-UPDATE-END',
          payload: date,
        },
      ),
    ).toEqual({
      startDate: null,
      endDate: date,
    });
  });
});
