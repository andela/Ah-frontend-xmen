import React from 'react';
import { shallow } from 'enzyme';
import { Paginations } from '../PaginationView';

const props = {
  count: 103,
  newArticles: [],
  fetchArticlesAction: jest.fn(),
};

describe('<Paginations />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Paginations {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test that the state', () => {
  it('should update in componentwillrecieveprops', () => {
    const wrapper = shallow(<Paginations />);
    const nextProps = {
      count: 5,
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state());
  });

  it('should update in handlenext', () => {
    const wrapper = shallow(<Paginations {...props} />);
    wrapper.instance().handleNext(0);
    expect(wrapper.state());
  });
});
