import React from 'react';
import { Redirect } from 'react-router-dom';
import { shallow } from 'enzyme';
import Banner from '../Banner';

describe('Banner', () => {
  it('Should render without crashing', () => {
    const component = shallow(<Banner />);
    expect(component).toMatchSnapshot();
  });

  it('should call onModalOpen', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find('#modalLauncher').simulate('click', { preventDefault: () => {} }).length).toBe(1);
  });
  it('should call onModalClose', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.instance().onModalClose({ preventDefault() {} })).toEqual(<Redirect push={false} to="/" />);
  });
});
