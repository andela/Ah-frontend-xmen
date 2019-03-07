import notificationReducer from '../notificationsReducer';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../../actions/ActionTypes';

describe('test reducer', () => {
  const state = {
    notifications: [],
    hasUnread: false,
  };
  let newState;
  let action;
  let notifications;

  it('should return a new state on suceess', () => {
    notifications = [
      {
        message: 'test message',
        is_read: false,
        action_link: '/api/articles/slug-asd',
      },
      {
        message: 'test message for article has been followed',
        is_read: false,
        action_link: '/api/profiles/username',
      },

      {
        message: 'test message',
        is_read: false,
        action_link: '/api/comments/1',
      },
    ];
    action = { type: FETCH_NOTIFICATIONS_SUCCESS, payload: notifications };
    newState = notificationReducer(state, action);
    expect(newState).toHaveProperty('hasUnread', true);
  });
  it('should return same state on invalid action', () => {
    action = { type: 'INVALID', payload: [] };
    newState = notificationReducer(state, action);
    expect(newState).toEqual(state);
  });
});
