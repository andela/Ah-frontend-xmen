import passwordResetReducer from '../passwordResetReducer';
import ActionTypes from '../../actions/ActionTypes';

describe('test reducer', () => {
  const state = {};
  let newState;
  let action;

  it('should return a new state on suceess', () => {
    action = { type: ActionTypes.PASSWORD_RESET_SUCCESS, payload: 'success message' };
    newState = passwordResetReducer(state, action);
    expect(newState).toHaveProperty('message', 'success message');
  });

  it('should return a new state on failure', () => {
    action = { type: ActionTypes.PASSWORD_RESET_FAILED, payload: 'error message' };
    newState = passwordResetReducer(state, action);
    expect(newState).toHaveProperty('errors', 'error message');
  });

  it('should return the same state on wrong action type', () => {
    action = { type: 'WRONG_ACTION_TYPE', payload: 'error message' };
    newState = passwordResetReducer(state, action);
    expect(newState).not.toHaveProperty('errors', 'error message');
  });
});
