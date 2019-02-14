import React from 'react';
import { shallow } from 'enzyme';
import SocialAuth from './socialAuth';


describe('<SocialAuth', () => {
  it('should render without crushing', () => {
    const wrapper = shallow(<SocialAuth />);
    expect(wrapper).toMatchSnapshot();
  });
});
