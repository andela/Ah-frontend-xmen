import React from 'react';
import { shallow } from 'enzyme';
import { ProfileView } from '../src/views/ProfileView';


describe('profile view', () => {
  it('should render with loading', () => {
    const props = {
      fetchProfile: jest.fn(),
      bookmarkListing: jest.fn(),
      loading: 'loading',
      match: { params: {} },
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render witho errors', () => {
    const props = {
      fetchProfile: jest.fn(),
      bookmarkListing: jest.fn(),
      error: 'error',
      match: { params: {} },
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    const props = {
      match: { params: {} },
      fetchProfile: jest.fn(),
      bookmarkListing: jest.fn(),
    }; const wrapper = shallow(<ProfileView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
