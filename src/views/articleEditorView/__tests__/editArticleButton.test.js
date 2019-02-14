import React from 'react';
import { shallow } from 'enzyme';
import { EditButton } from '../EditArticleButton';


describe('<EditButton />', () => {
  const props = {
    slug: 'jkdjd',
    hidden: 'kdhdhd',
  };
  beforeEach(() => {
    localStorage.setItem('token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2RhdGEiOiJuYWJycmlra0B5YWhvby5jb20gcmljaGFyZCIsImV4cCI6MTU1MTE4NjA2NH0.Mqt5-sPOqR9GSzddLpHWiivNYDqDlIE15QHoqU8Enrk');
  });
  afterEach(() => {
    localStorage.clear();
  });
  it('should render without crashing', () => {
    localStorage.clear();
    const wrapper = shallow(<EditButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when logged in', () => {
    const wrapper = shallow(<EditButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
