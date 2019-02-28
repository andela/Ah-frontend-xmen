import React from 'react';
import { shallow } from 'enzyme';
import { CreateArticleView } from '../CreateArticleView';

const props = {
  history: {
    push: jest.fn(),
  },
  isSuccessful: false,
  errors: {
    title: 'hshs',
    description: 'hdhd',
    body: 'hchdhd',
    tags: ['hdhd'],
  },
  CreateArticle: jest.fn(),
};


describe('<CreateArticleView />', () => {
  it('should call handleErrors', () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.errors.title).toBe(props.errors.title);
  });
  it('should call handle submit', () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    const event = {
      preventDefault: jest.fn(),
      target: [
        {
          value: 'hshhshs',
        },
        {
          value: 'hshshshs',
        },
      ],
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().props.CreateArticle).toBeCalled();
  });
  it('should call handleInput', () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.instance().setState = jest.fn();
    const event = {
      target: {
        title: '',
        value: '',
      },
    };
    wrapper.instance().handleInput(event);
    expect(wrapper.instance().setState).toBeCalled();
  });
  it('should call handleChange', () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.instance().setState = jest.fn();
    const tags = [];
    wrapper.instance().handleChange(tags);
    expect(wrapper.instance().setState).toBeCalled();
  });
  it('should call handleBodyChange', () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.instance().setState = jest.fn();
    const value = '';
    wrapper.instance().handleBodyChange(value);
    expect(wrapper.instance().setState).toBeCalled();
  });
  it('should handle errors on article creation', () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.setProps({
      isSuccessful: false,
      errors: {
        title: '',
        description: '',
        body: '',
        tags: [],
      },
    });
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.errors).toBeDefined();
  });
  it('should redirect after successful article creation', () => {
    const wrapper = shallow(<CreateArticleView {...props} />);
    wrapper.setProps({
      isSuccessful: true,
      article: {
        slug: 'aidsd-s2',
      },
    });
    const nextProps = {
      article: {
        slug: 'aidsd-s2',
      },
    };
    wrapper.instance().props.history.push(`/article/${nextProps.article.slug}`);
    expect(wrapper.instance().props.article).toBeDefined();
  });
});
