import { shallow } from 'enzyme';
import React from 'react';
import LoginModal from '../loginModal';

const props = {
  onClose: jest.fn(),
  open: false,
};
describe('login modal', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LoginModal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
