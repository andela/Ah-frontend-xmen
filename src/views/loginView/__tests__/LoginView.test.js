import React from 'react';
import { shallow } from 'enzyme';
import { LoginView } from '../LoginView';

describe('LoginView', () => {
  it('should render without crashing', () => {
    const props = {};
    const instance = new LoginView(props);
    const wrapper = shallow(
      instance.render(),
    );
    expect(wrapper).toMatchSnapshot();
  });


  it('should reload on new token', () => {
    const props = {
      token: '',
    };
    global.setTimeout = jest.fn();

    const wrapper = shallow(<LoginView {...props} />);
    wrapper.instance().componentWillReceiveProps({
      token: '123',
    });
    expect(global.setTimeout).toHaveBeenCalled();
  });

  it('should not reload if there is no token received', () => {
    const props = {
      token: '',
    };
    global.setTimeout = jest.fn();

    const wrapper = shallow(<LoginView {...props} />);
    wrapper.instance().componentWillReceiveProps({});
    expect(global.setTimeout).not.toHaveBeenCalled();
  });

  it('should call the login action', () => {
    const props = { loginAction: jest.fn() };
    const wrapper = shallow(<LoginView {...props} />);

    const event = {
      preventDefault: jest.fn(),
      target:
      {
        elements: {
          email: {
            value: 'testemail@mail.com',
          },
          password: {
            value: 'Password1',
          },
        },
      },
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().props.loginAction).toHaveBeenCalled();
  });
});
