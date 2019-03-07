import { shallow } from 'enzyme';
import React from 'react';
import ProfileCard from '../profileCard';

describe('Profile Card', () => {
  const profile = {
    username: 'khaleesi',
    first_name: 'daenerys',
    last_name: 'stormborne',
    is_following: false,
  };
  const props = {
    profile,
    onFollow: jest.fn(),
    onUnfollow: jest.fn(),
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<ProfileCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
