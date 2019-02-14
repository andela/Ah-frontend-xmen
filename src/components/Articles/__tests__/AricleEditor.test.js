import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Editor from '../ArticleEditor';

describe('<Editor />', () => {
  const props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    onInputChange: jest.fn(),
    onBodyChange: jest.fn(),
    title: 'title',
    description: 'description',
    body: 'body',
    tags: ['tags'],
  };
  it('should render wihtout crashing', () => {
    const wrapper = shallow(<Editor {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
