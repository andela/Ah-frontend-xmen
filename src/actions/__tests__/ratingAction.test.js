import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import { RATE_SUCCESSFUL } from '../ActionTypes';
import ratingAction from '../ratingAction';

const mockStore = configureStore([thunk]);
describe('Rating action', () => {
  beforeEach(() => {
    fetchMock.restore();
  });
  it('should dispatch correct action on rating successful', () => {
    const { BASE_URL } = process.env;
    const slug = 'slug-is-123';
    localStorage.setItem('token', 'test.token');
    const expectedActions = [{
      type: RATE_SUCCESSFUL,
      payload: 5,
    }];
    fetchMock.postOnce(`${BASE_URL}/articles/${slug}/rate/`,
      {
        articles: {
          rating: 5,
        },
      });
    const store = mockStore();

    store.dispatch(ratingAction(slug, 5)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should call toast.error on rating failed', () => {
    const { BASE_URL } = process.env;
    const slug = 'slug-is-123';
    const errorMessage = 'you have already rated this article';
    localStorage.setItem('token', 'test.token');

    fetchMock.postOnce(`${BASE_URL}/articles/${slug}/rate/`,
      {
        articles: {
          message: errorMessage,

        },
      });
    const store = mockStore();
    toast.error = jest.fn();
    store.dispatch(ratingAction(slug, 5)).then(() => {
      expect(toast.error).toHaveBeenCalledWith(errorMessage);
    });
  });

  it('should call toast.error on article nof found', () => {
    const { BASE_URL } = process.env;
    const slug = 'slug-is-123';
    const errorMessage = 'not found';
    localStorage.setItem('token', 'test.token');

    fetchMock.postOnce(`${BASE_URL}/articles/${slug}/rate/`,
      {
        articles: {
          detail: errorMessage,

        },
      });
    const store = mockStore();
    toast.error = jest.fn();
    store.dispatch(ratingAction(slug, 5)).then(() => {
      expect(toast.error).toHaveBeenCalledWith(errorMessage);
    });
  });
});
