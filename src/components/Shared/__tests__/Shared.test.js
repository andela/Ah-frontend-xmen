import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer';
import { Header } from '../Header';

const props = {
  getAuthUserDetails: jest.fn(),
  auth: {
    IsAuth: true,
  },
};

describe('Shared Components', () => {
  it('should render Footer without crushing', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });

  it('should render Header without crushing', () => {
    const component = shallow(<Header {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call onModalClose', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.instance().onModalClose({ preventDefault() {} })).toEqual(<Redirect push={false} to="/" />);
  });

  it('should call onModalOen', () => {
    const wrapper = shallow(<Header {...props} />);
    const event = { preventDefault: jest.fn() };
    wrapper.instance().onModalOpen(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should open dropdown on click', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.find('#dd-click').simulate('click', { preventDefault: () => {} });
    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should close dropdown on click', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().state.isShowing = true;
    wrapper.find('#dd-click').simulate('click', { preventDefault: () => {} });
    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should log out', () => {
    const wrapper = shallow(<Header {...props} />);
    localStorage.setItem('slug', 'it-is-me');
    wrapper.instance().logout = jest.fn();
    wrapper.find('#logout').simulate('click', { preventDefault: () => {} });
    expect(localStorage.getItem('slug')).toBeNull();
  });
});
