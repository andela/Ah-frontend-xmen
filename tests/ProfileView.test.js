import React from 'react';
import { shallow } from 'enzyme';
import { ProfileView } from '../src/views/ProfileView';


describe('profile view', () => {
  it('should render with loading', () => {
    const props = {
      getProfiles: jest.fn(),
      loading: 'loading',
      match: { params: {} },
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render witho errors', () => {
    const props = {
      getProfiles: jest.fn(),
      error: 'error',
      match: { params: {} },
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    const props = {
      getProfiles: jest.fn(),
      match: { params: {} },
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
