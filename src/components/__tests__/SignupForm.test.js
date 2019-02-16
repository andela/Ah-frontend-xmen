import { shallow } from 'enzyme';
import React from 'react';
import SignupForm from '../auth/SignupForm';

describe('Signupform', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
