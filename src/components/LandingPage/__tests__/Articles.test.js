import React from 'react';
import { shallow } from 'enzyme';
import { Articles } from '../Articles';

const props = {
  fetchArticlesAction: jest.fn(),
  articles: [
    {
      title: '',
      image: '',

      slug: 'slu-sad',
    },
  ],
  author: {
    username: 'Douglas',
  },
};

describe('<Articles />', () => {
  it.only('should render without crashing', () => {
    const wrapper = shallow(<Articles {...props} />);

    const instance = wrapper.instance();
    const spy = jest.spyOn(wrapper.instance().props, 'fetchArticlesAction');
    instance.componentWillMount();
    expect(spy).toHaveBeenCalled();
  });
});
