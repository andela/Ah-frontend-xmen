import React from 'react';
import { shallow } from 'enzyme';
import HomeView from '../src/views/HomeView';

describe('app tests', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<HomeView />);
    expect(wrapper).toMatchSnapshot();
  });
});
