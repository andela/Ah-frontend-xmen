import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PasswordResetView } from '../src/views/PasswordResetView';
import Routes from '../src/routes/index';

describe('test password reset route', () => {
  it('should render Routes without crashng', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/password-reset']}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(Routes)).toHaveLength(1);
  });


  it('should render password reset view without crashng', () => {
    const config = {
      match: {
        params: {
          token: '123.213.123',
        },
      },
      passwordResetReducer: {},
    };
    const wrapper = mount(
      <MemoryRouter>
        <PasswordResetView {...config} />
      </MemoryRouter>,
    );

    expect(wrapper.find(PasswordResetView)).toHaveLength(1);
  });


  it('should render message view without crashng', () => {
    const config = {
      match: {
        params: {},
      },
      passwordResetReducer: { message: 'password changed' },
      passwordResetAction: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter>
        <PasswordResetView {...config} />
      </MemoryRouter>,
    );

    expect(wrapper.find(PasswordResetView)).toHaveLength(1);
  });

  it('should render invalid token message view without crashng', () => {
    const config = {
      match: {
        params: { token: 'invalid-token' },
      },
      passwordResetReducer: {},
      passwordResetAction: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter>
        <PasswordResetView {...config} />
      </MemoryRouter>,
    );

    expect(wrapper.find(PasswordResetView)).toHaveLength(1);
  });


  it('should call passwordReset action on form submit', () => {
    const props = {
      match: {
        params: {},
      },
      passwordResetReducer: {},
      passwordResetAction: jest.fn(),
      passwordChangeAction: jest.fn(),
    };

    const instance = new PasswordResetView(props);
    const wrapper = mount(
      <MemoryRouter>
        {instance.render()}
      </MemoryRouter>,
    );
    wrapper.find('form').simulate('submit', { target: [{ value: 'testemail@mail.com' }] });
    expect(instance.props.passwordResetAction).toHaveBeenCalled();
  });


  it('should call passwordChange action on form submit', () => {
    const props = {
      match: {
        params: { token: '123.123.123' },
      },
      passwordResetReducer: {},
      passwordResetAction: jest.fn(),
      passwordChangeAction: jest.fn(),
    };

    const instance = new PasswordResetView(props);
    const wrapper = mount(
      <MemoryRouter>
        {instance.render()}
      </MemoryRouter>,
    );

    wrapper.find('form').simulate('submit', { target: [{ value: 'testemail@mail.com' }] });
    expect(instance.props.passwordChangeAction).toHaveBeenCalled();
  });
});
