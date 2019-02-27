import { shallow } from 'enzyme';
import React from 'react';
import CommentBanner from './commentBanner';
import CommentsInput from './commentInput';

const props = {
  comments: [{
    id: 1,
    body: 'a body',
    author: {
      image: '',
      username: 'dee',
    },
  }],
  user: 'dee',

};
describe('<CommentBanner/>', () => {
  it('should render without crushing', () => {
    const wrapper = shallow(<CommentBanner {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<CommentInput/>', () => {
  it('should render with out crushing', () => {
    const wrapper = shallow(<CommentsInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
