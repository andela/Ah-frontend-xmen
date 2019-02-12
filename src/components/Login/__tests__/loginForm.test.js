import { shallow } from 'enzyme';
import React from 'react';
import Login from '../loginForm';


describe('login form on login success', () => {
  const props = {
    onSubmit: jest.fn(),
    errors: null,
    isSuccessful: true,
    emailError: '',
    passwordError: '',
    generalError: '',
    successMessage: 'Successfully logged in',
  };
  it('should render without crashing', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('login form on login fail', () => {
  const props = {
    onSubmit: jest.fn(),
    errors: {},
    isSuccessful: false,
    emailError: 'error',
    passwordError: 'error',
    generalError: 'error',
    successMessage: '',
  };
  it('should render without crashing', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
