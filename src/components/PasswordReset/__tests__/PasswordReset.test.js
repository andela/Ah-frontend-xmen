import React from 'react';
import { shallow } from 'enzyme';
import ResetForm from '../ResetForm';
import NewPasswordForm from '../NewPasswordFrom';
import Message from '../Message';

describe('test password reset components', () => {
  it('should render ResetForm without crashing', () => {
    const wrapper = shallow(<ResetForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render NewPasswordForm without crashing', () => {
    const wrapper = shallow(<NewPasswordForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Message without crashing', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper).toMatchSnapshot();
  });
});
