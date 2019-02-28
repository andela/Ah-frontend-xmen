import React from 'react';
import { shallow } from 'enzyme';
import { DeleteButton } from '../DeleteArticleButton';

const props = {
  isArticleDeleted: false,
  slug: 'hdhdhdh-dj',
  history: {
    push: jest.fn(),
  },
  DeleteArticle: jest.fn(),
};
global.confirm = () => true;
jest.useFakeTimers();

describe('<DeleteButton />', () => {
  beforeEach(() => {
    localStorage.setItem('token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2RhdGEiOiJjYWx2aW4udGlua2FAYW5kZWxhLmNvbSBjYWx2aW5wZXRlIiwiZXhwIjoxNTUxMjc4MTE0fQ.-rKpzUd5I0aboM41faFI_JC-D0ZA7-7me-2ZOflVo7Y');
  });
  afterEach(() => {
    localStorage.clear();
  });
  it('should call handle delete', () => {
    localStorage.clear();
    const wrapper = shallow(<DeleteButton {...props} />);
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleDelete(event);
    expect(wrapper.instance().props.DeleteArticle).toBeCalled();
  });
  it('should redirect after article deleted', () => {
    const wrapper = shallow(<DeleteButton {...props} />);
    wrapper.setProps({
      isArticleDeleted: true,
    });
    jest.runAllTimers();
    wrapper.instance().props.history.push('/');
    expect(wrapper.instance().props.isArticleDeleted).toBeTruthy();
  });
});
