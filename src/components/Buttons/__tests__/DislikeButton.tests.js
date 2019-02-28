import React from 'react';
import { shallow } from 'enzyme';
import DislikeButton from '../DislikeButton';

describe('DislikeButton', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<DislikeButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
