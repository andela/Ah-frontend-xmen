import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer';
import { Header, mapStateToProps } from '../Header';

const props = {
  getNotifications: jest.fn(),
  getAuthUserDetails: jest.fn(),
  auth: {
    IsAuth: true,
  },
  history: {
    push: jest.fn(),
  },
  hasUnread: true,
  markAsRead: jest.fn(),
  notifications: [{
    message: 'new notificaition',
    actionLink: '/test-path',
  }],
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
  it('should render Header without crushing', () => {
    const props = {
      getNotifications: jest.fn(),
      getAuthUserDetails: jest.fn(),
      auth: {
        IsAuth: false,
        image: '/path/to/image.jpg',
      },
      hasUnread: false,
      markAsRead: jest.fn(),
      notifications: [{
        message: 'new notificaition',
        actionLink: '/test-path',
      }],
    };
    const component = shallow(<Header {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call onModalClose', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.instance().onModalClose({ preventDefault() {} })).toEqual(
      <Redirect push={false} to="/" />,
    );
  });

  it('should call onLoginModalClose', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.instance().onCloseLoginModal();
    expect(wrapper.instance().state).toEqual({
      open: false,
      openLoginModal: false,
      active: '',
      isShowing: false,
    });
  });

  it('should call onOpenLoginModal', () => {
    const wrapper = shallow(<Header {...props} />);

    wrapper.instance().onOpenLoginModal();
    expect(wrapper.instance().state).toEqual({
      open: false,
      openLoginModal: true,
      active: '',
      isShowing: false,
    });
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
    wrapper.instance().state.notificationMenuActive = false;
    wrapper.find('#dd-click').simulate('click', { preventDefault: () => {} });
    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should close notifcaion dropdown on click', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().state.isShowing = true;
    wrapper.instance().state.notificationMenuActive = true;
    wrapper.find('#nd-click').simulate('click', { preventDefault: () => {} });
    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should open notifcaion dropdown on click', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().state.notificationMenuActive = true;
    wrapper.find('#nd-click').simulate('click', { preventDefault: () => {} });
    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should call mark as Read ', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().markAsRead('/test-link');

    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should log out', () => {
    const wrapper = shallow(<Header {...props} />);
    localStorage.setItem('slug', 'it-is-me');
    wrapper.instance().logOut();
    expect(localStorage.getItem('slug')).toBeNull();
  });

  it('should map state to props', () => {
    const state = {
      Auth: true,
      notificationsReducer: {
        notifications: [],
        hasUnread: false,
      },
    };
    const expectedProps = {
      auth: true,
      Notifications: [],
      hasUnread: false,

    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
