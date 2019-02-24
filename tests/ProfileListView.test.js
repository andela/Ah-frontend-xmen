import React from 'react';
import { shallow } from 'enzyme';
import { ProfileListView } from '../src/views/ProfileListView';

describe('ProfileList View', () => {
  let props = {
    profileListAction: jest.fn(),
    followingListAction: jest.fn(),
    followersListAction: jest.fn(),
    followAction: jest.fn(),
    unfollowAction: jest.fn(),
    match: {
      params: {
        username: 'daenerys',
      },
    },
    followState: {
      message: 'You have followed daenerys',
    },
  };


  it('should render without crashing', () => {
    const wrapper = shallow(<ProfileListView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handle Follow', () => {
    const event = {
      target: {
        id: 'me',
      },
    };
    const wrapper = shallow(<ProfileListView {...props} />);
    wrapper.instance().handleFollow(event);
    expect(wrapper.instance().props.followAction).toHaveBeenCalled();
  });

  it('should call handle unfollow', () => {
    const event = {
      target: {
        id: 'me',
      },
    };
    const wrapper = shallow(<ProfileListView {...props} />);
    wrapper.instance().handleUnfollow(event);
    expect(wrapper.instance().props.unfollowAction).toHaveBeenCalled();
  });

  it('should change state', () => {
    const wrapper = shallow(<ProfileListView {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().state = {
      profiles: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        is_following: false,
      }],
      followState: {
        message: 'You have followed khaleesi',
      },
    };

    wrapper.instance().componentWillReceiveProps({
      profiles: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        is_following: false,
      }],
      followState: {
        message: 'You have followed khaleesi',
      },
    });

    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should call followingListAction', () => {
    props = {
      followingListAction: jest.fn(),
      match: {
        params: {
          username: 'daenerys',
        },
        path: '/profiles/:username/following',
      },
    };
    const wrapper = shallow(<ProfileListView {...props} />);
    wrapper.instance().componentWillMount();
    expect(wrapper.instance().props.followingListAction).toHaveBeenCalled();
  });

  it('should call followersListAction', () => {
    props = {
      followersListAction: jest.fn(),
      match: {
        params: {
          username: 'daenerys',
        },
        path: '/profiles/:username/followers',
      },
    };
    const wrapper = shallow(<ProfileListView {...props} />);
    wrapper.instance().componentWillMount();
    expect(wrapper.instance().props.followersListAction).toHaveBeenCalled();
  });

  it('shouldsadsad', () => {
    const wrapper = shallow(<ProfileListView {...props} />);
    wrapper.instance().setState({
      profiles: [{
        username: 'khaleesi',
        first_name: 'daenerys',
        last_name: 'stormborne',
        is_following: false,
      },
      {
        username: 'queen',
        first_name: 'cersei',
        last_name: 'lannister',
        is_following: false,
      }],
    });
  });
});
