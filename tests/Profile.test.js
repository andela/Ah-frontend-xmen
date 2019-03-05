import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Profile from '../src/components/Profile';

describe('<Profile />', () => {
  const props = {
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
      followers: 0,
    },
    map: jest.fn(),
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
});
