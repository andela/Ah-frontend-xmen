import React from 'react';
import { shallow } from 'enzyme';
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
});
