import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../src/components/Profile';

describe('<Profile />', () => {
  let props = {
    fetchProfile: jest.fn(),
    bookmarkListing: jest.fn(),
    bookmarks: [{
      title: 'deed',
      slug: 'dedededed',
    }],
    profile: {
      bio: 'hello',
      first_name: 'maria',
      last_name: 'jane',
      following: 0,
      followers: 3,
    },
    map: jest.fn(),
    is_following: true,
    onUnfollow: jest.fn(),
    onFollow: jest.fn(),
  };

  it('tests the profile component matches the snapshot', () => {
    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('contains 1 paragraph element', () => {
    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('contains an image element', () => {
    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('handles the unfollow button click function', () => {
    const wrapper = mount(<MemoryRouter><Profile {...props} /></MemoryRouter>);
    wrapper.find('.profile-follow').simulate('click');
    expect(props.onUnfollow).toHaveBeenCalled();
  });

  it('handles the follow button click function', () => {
    props = {
      fetchProfile: () => jest.fn(),
      bookmarks: [{
        title: 'deed',
        slug: 'dedededed',
      }],
      profile: {
        bio: 'hello',
        first_name: 'maria',
        last_name: 'jane',
        following: 0,
        followers: 3,
      },
      is_following: false,
      onUnfollow: jest.fn(),
      onFollow: jest.fn(),
    };
    const wrapper = mount(<MemoryRouter><Profile {...props} /></MemoryRouter>);
    wrapper.find('.profile-follow').simulate('click');
    expect(props.onFollow).toHaveBeenCalled();
  });
});
