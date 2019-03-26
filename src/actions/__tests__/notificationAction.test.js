import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../ActionTypes';
import notificationAction from '../notificationsAction';

const mockStore = configureStore([thunk]);
describe('Notification action', () => {
  beforeEach(() => {
    fetchMock.restore();
  });
  it('should dispatch correct action on GET successful', () => {
    const { BASE_URL } = process.env;
    localStorage.setItem('token', 'test.token');
    const expectedActions = [{
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: 5,
    }];
    fetchMock.getOnce(`${BASE_URL}/notifications/all`,
      {
        notification: [],

      });
    const store = mockStore();

    store.dispatch(notificationAction(false)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch correct action on GET fails', () => {
    const { BASE_URL } = process.env;
    localStorage.setItem('token', 'test.token');

    fetchMock.getOnce(`${BASE_URL}/notifications/all`,
      {
        body: {},
        status: 403,
        headers: { 'content-type': 'application/json' },
      });
    const store = mockStore();


    store.dispatch(notificationAction(false)).then(() => {
      expect(localStorage.getItem('token')).toBeNull();
    });
  });
  it('should dispatch correct action on PUT fails', () => {
    const { BASE_URL } = process.env;
    localStorage.setItem('token', 'test.token');

    fetchMock.putOnce(`${BASE_URL}/notifications/all`,
      {
        body: {},
        status: 403,
        headers: { 'content-type': 'application/json' },
      });
    const store = mockStore();


    store.dispatch(notificationAction(true)).then(() => {
      expect(localStorage.getItem('token')).toBeNull();
    });
  });
});
