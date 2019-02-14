import React from 'react';
import { shallow } from 'enzyme';
import ArticleCardComp from '../ArticleCard';

describe('ArticleCard', () => {
  const props = {
    author: {
      username: 'douglas',
    },
    title: 'New Article',
    read_time: '1 min read',
    description: 'this description',
  };
  const wrapper = shallow(<ArticleCardComp {...props} />);

  it('Should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
