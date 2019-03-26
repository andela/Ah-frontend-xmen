import fecthMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchAllTags from '../articleActions/fetchTagsAction';
import ActionTypes from '../ActionTypes';

const { BASE_URL } = process.env;
const mockStore = configureStore([thunk]);
describe('fetchAllTags', () => {
  beforeEach(() => {
    fecthMock.restore();
  });
  it('should dispatch FETCH_TAGS_SUCCESS action', () => {
    const expectedActions = [
      {
        type: ActionTypes.FETCH_TAGS_SUCCESS,
        payload: [],
      },
    ];
    fecthMock.getOnce(`${BASE_URL}/tags`,
      {
        body: {
          tags: [],
        },
      });
    const store = mockStore();
    return store.dispatch(fetchAllTags()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
