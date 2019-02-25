import React from 'react';
import { shallow } from 'enzyme';
import LikeButton from '../LikeButton';

describe('LikeButton', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LikeButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
