import React from 'react';
import { shallow } from 'enzyme';
import { RegisterView } from '../RegisterView';

const props = {
  signupState: {
    isSuccessful: false,
    errors: {
      email: 'asdadsf',
      username: 'sadas',
      password: 'dasdasd',
    },
    token: '',
    message: '',
  },
  registerUser: jest.fn(),

};

describe('<Register/>', () => {
  it('should call handleSubmit', () => {
    const wrapper = shallow(<RegisterView {...props} />);
    wrapper.instance().handleSubmit({ preventDefault() {} });
    expect(wrapper.instance().props.registerUser).toBeCalled();
  });
  it('should call handleErrors', () => {
    const wrapper = shallow(<RegisterView {...props} />);
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.signupState.errors.email).toBe(props.signupState.errors.email);
  });
  it('should call handleChange', () => {
    const wrapper = shallow(<RegisterView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        id: '',
        value: '',
      },
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().setState).toBeCalled();
  });

  it('should handle success on registration', () => {
    const wrapper = shallow(<RegisterView {...props} />);
    wrapper.setProps({
      signupState: {
        isSuccessful: true,
        message: 'hello',
        token: '',
      },
    });
    wrapper.instance().handleSuccess(props.signupState);
    expect(wrapper.instance().props.signupState.isSuccessful).toBe(true);
  });
  it('should handle errors on registrations', () => {
    const wrapper = shallow(<RegisterView {...props} />);
    wrapper.setProps({
      signupState:
   {
     isSuccessful: false,
     errors: {
       username: '',
       password: '',
       email: '',
     },
   },
    });
    expect(wrapper.instance().props.signupState.errors).toBeDefined();
  });
});
