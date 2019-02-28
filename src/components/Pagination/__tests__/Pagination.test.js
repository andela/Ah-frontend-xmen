import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../Pagination';

const props = {
  count: 103,
  newArticles: [],
  pageNumbers: [1, 2, 3],
  currentPage: 1,
  nextPage: jest.fn(),
};

describe('<Paginations />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Pagination {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should move to next page without crashing', () => {
    const wrapper = shallow(<Pagination {...props} />);
    wrapper.find('#page_1').simulate('click');
    expect(wrapper.instance().props.nextPage).toHaveBeenCalled();
  });

  it('should render previous page without crashing', () => {
    const wrapper = shallow(<Pagination {...props} />);
    wrapper.find('#previous').simulate('click');
    expect(wrapper.instance().props.nextPage).toHaveBeenCalled();
  });

  it('should render next page without crashing', () => {
    const wrapper = shallow(<Pagination {...props} />);
    wrapper.find('#next').simulate('click');
    expect(wrapper.instance().props.nextPage).toHaveBeenCalled();
  });
});
