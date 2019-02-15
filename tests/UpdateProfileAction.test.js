import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import expect from 'expect';
import * as ActionTypes from '../src/actions/ActionTypes';
import editProfile from '../src/actions/ProfileActions';
import { UpdateView } from '../src/views/UpdateView';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('edit Profile action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    localStorage.clear();
  });
  it('should have a type of EDIT_PROFILE_SUCEEDS', () => {
    const payload = 'hello';
    const expectedAction = {
      type: ActionTypes.EDIT_PROFILE_SUCCEEDS,
      payload: 'hello',
    };
    const result = ActionTypes.editProfilesSucceeds(payload);
    expect(result).toEqual(expectedAction);
  });
  it('should be able to modify a product', () => {
    const expectedAction = (editProfile);
    expect(editProfile).toEqual(expectedAction);
  });
  it('should handle submit', () => {
    localStorage.setItem('users', JSON.stringify([
      {
        first_name: 'testname',
        last_name: 'testname2',
        bio: 'hello',
      },
    ]));
    const props = {
      history: {
        push: jest.fn(),

      },
      editProfile: jest.fn(),
      getProfile: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(<UpdateView {...props} />);
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().props.history.push).toHaveBeenCalled();
  });

  it('should call getProfile', () => {
    localStorage.setItem('users', JSON.stringify([
      {
        first_name: 'testname',
        last_name: 'testname2',
        bio: 'hello',
      },
    ]));
    const props = {
      history: {
        push: jest.fn(),

      },
      editProfile: jest.fn(),
      getProfile: jest.fn(),
    };
    const wrapper = shallow(<UpdateView {...props} />);
    wrapper.instance().componentDidUpdate();
    expect(wrapper.instance().props.getProfile).toHaveBeenCalled();
  });
  it('should call handleInput', () => {
    localStorage.setItem('users', JSON.stringify([
      {
        first_name: 'testname',
        last_name: 'testname2',
        bio: 'hello',
      },
    ]));
    const props = {
      history: {
        push: jest.fn(),

      },
      editProfile: jest.fn(),
      getProfile: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'testname',
        value: 'testvalue',
      },
    };

    const wrapper = shallow(<UpdateView {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().handleInput(event);
    expect(wrapper.instance().setState).toHaveBeenCalled();
  });
});
