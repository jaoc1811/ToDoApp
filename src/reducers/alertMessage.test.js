import alertMessageReducer from './alertMessage';

describe('alertMessage reducer', () => {
  it('should return the initial state', () => {
    expect(alertMessageReducer(undefined, {})).toEqual({
      show: false,
      head: '',
      body: '',
      variant: '',
    });
  });

  it('should handle SHOW', () => {
    expect(
      alertMessageReducer(
        {
          show: false,
          head: '',
          body: '',
          variant: '',
        },
        {
          type: 'SHOW',
          payload: {
            show: true,
            head: 'Alert head',
            body: 'Alert body',
            variant: 'danger',
          },
        },
      ),
    ).toEqual({
      show: true,
      head: 'Alert head',
      body: 'Alert body',
      variant: 'danger',
    });
  });

  it('should handle HIDE', () => {
    expect(
      alertMessageReducer(
        {
          show: true,
          head: 'Alert head',
          body: 'Alert body',
          variant: 'danger',
        },
        {
          type: 'HIDE',
        },
      ),
    ).toEqual({
      show: false,
      head: 'Alert head',
      body: 'Alert body',
      variant: 'danger',
    });
  });
});
