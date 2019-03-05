import React from 'react';
import { shallow } from 'enzyme';
import { Banner, mapStateToProps } from '../Banner';

const props = {
  getAuthUserDetails: jest.fn(),
  auth: {
    isAuth: true,
  },
};

describe('Banner', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Banner {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call onModalOpen', () => {
    const wrapper = shallow(<Banner {...props} />);
    const e = {
      preventDefault: () => {},
    };
    wrapper.instance().setState({
      openLoginModal: true,
    });
    wrapper.instance().onModalOpen(e);
    expect(wrapper.instance().state.open).toBeTruthy();
  });

  it('should call onModalClose', () => {
    const wrapper = shallow(<Banner {...props} />);
    const e = {
      preventDefault: () => {},
    };

    wrapper.instance().onModalClose(e);
    expect(wrapper.instance().state.open).toBeFalsy();
  });

  it('should call setState onOpenLoginModal', () => {
    const instance = new Banner(props);
    instance.setState = jest.fn();
    instance.onOpenLoginModal({});
    expect(instance.setState).toHaveBeenCalled();
  });

  it('should call close loginModal is its open', () => {
    const wrapper = shallow(<Banner {...props} />);
    wrapper.instance().setState({
      open: true,
    });
    wrapper.instance().onOpenLoginModal();
    expect(wrapper.instance().state.open).toBeFalsy();
  });

  it('should call setState onCloseLoginModal', () => {
    const instance = new Banner(props);
    instance.setState = jest.fn();
    instance.onCloseLoginModal({});
    expect(instance.setState).toHaveBeenCalled();
  });

  it('should map state to props', () => {
    expect(mapStateToProps({})).toEqual({ auth: undefined });
  });
});
