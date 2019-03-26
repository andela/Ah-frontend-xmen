import React from 'react';
import { shallow } from 'enzyme';
import { ProfileView } from '../src/views/ProfileView';


describe('profile view', () => {
  it('should render with loading', () => {
    const props = {
      getProfiles: jest.fn(),
      bookmarkListing: jest.fn(),
      loading: 'loading',
      match: { params: {} },
      profile: {
        bio: 'hello',
        first_name: 'maria',
        last_name: 'jane',
        following: 0,
        followers: 3,
      },
    };
    const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with errors', () => {
    const props = {
      getProfiles: jest.fn(),
      bookmarkListing: jest.fn(),
      error: 'error',
      match: { params: {} },
      profile: {
        bio: 'hello',
        first_name: 'maria',
        last_name: 'jane',
        following: 0,
        followers: 3,
      },
    };
    const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const props = {
      match: { params: {} },
      getProfiles: jest.fn(),
      bookmarkListing: jest.fn(),
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle follow', () => {
    const props = {
      followState: true,
      getProfiles: jest.fn(),
      is_following: false,
      followAction: jest.fn(),
      bookmarkListing: jest.fn(),
      profile: {
        bio: 'hello',
        first_name: 'maria',
        last_name: 'jane',
        following: 0,
        followers: 3,
      },
      match: {
        params: {
          username: 'daenerys',
        },
      },
    };
    const wrapper = shallow(<ProfileView {...props} />);
    wrapper.setProps({
      is_following: false,
      profile: {
        is_following: false,
        followers: 2,
        following: 3,
      },
    });

    wrapper.instance().handleFollow();
    expect(wrapper.instance().props.followAction).toBeCalled();
  });

  it('should handle unfollow', () => {
    const props = {
      getProfiles: jest.fn(),
      is_following: false,
      unfollowAction: jest.fn(),
      bookmarkListing: jest.fn(),
      profile: {
        bio: 'hello',
        first_name: 'maria',
        last_name: 'jane',
        following: 0,
        followers: 3,
      },
      match: {
        params: {
          username: 'daenerys',
        },
      },
    };
    const wrapper = shallow(<ProfileView {...props} />);
    wrapper.setProps({
      is_following: true,
      profile: {
        is_following: true,
        followers: 2,
        following: 3,
      },
    });

    wrapper.instance().handleUnfollow();
    expect(wrapper.instance().props.unfollowAction).toBeCalled();
  });
});
