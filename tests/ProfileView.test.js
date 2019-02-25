import React from 'react';
import { shallow } from 'enzyme';
import { ProfileView } from '../src/views/ProfileView';


describe('profile view', () => {
  it('should render with loading', () => {
    const props = {
      getProfiles: jest.fn(),
      loading: 'loading',
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render witho errors', () => {
    const props = {
      getProfiles: jest.fn(),
      error: 'error',
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    const props = {
      getProfiles: jest.fn(),
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
