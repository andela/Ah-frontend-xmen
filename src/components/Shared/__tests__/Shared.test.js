import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

describe('Shared Components', () => {
  it('should render Footer without crushing', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });

  it('should render Header without crushing', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
  it('should call onModalClose', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.instance().onModalClose({ preventDefault() {} })).toEqual(<Redirect push={false} to="/" />);
  });
  it('should call onModalOen', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#modalOpener').simulate('click', { preventDefault: () => {} }).length).toBe(1);
  });
});
