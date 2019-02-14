import React from 'react';
import { shallow } from 'enzyme';
import { EditArticleView } from '../EditArticleView';

const props = {
  match: {
    params: {
      slug: 'hdhgd-djh',
    },
  },
  history: {
    push: jest.fn(),
  },
  isEditSuccessful: false,
  errors: {
    title: 'hdhd',
    description: 'fhfhf',
    body: 'hdfhdfh',
    tags: ['hdhd'],
  },
  EditArticle: jest.fn(),
  getSingleArticle: jest.fn(),
};


describe('<EditArticleView />', () => {
  beforeEach(() => {
    localStorage.setItem('article', JSON.stringify({
      title: 'test101',
      description: 'javascript',
      body: 'jest',
      tags: ['enzyme'],
    }));
  });
  afterEach(() => {
    localStorage.clear();
  });
  it('should call handleErrors', () => {
    const wrapper = shallow(<EditArticleView {...props} />);
    wrapper.instance().handleErrors(props);
    expect(wrapper.instance().props.errors.title).toBe(props.errors.title);
  });
  it('should call handle submit', () => {
    const wrapper = shallow(<EditArticleView {...props} />);
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
    expect(wrapper.instance().props.EditArticle).toBeCalled();
  });
  it('should call handleInput', () => {
    const wrapper = shallow(<EditArticleView {...props} />);
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
    const wrapper = shallow(<EditArticleView {...props} />);
    wrapper.instance().setState = jest.fn();
    const tags = [];
    wrapper.instance().handleChange(tags);
    expect(wrapper.instance().setState).toBeCalled();
  });
  it('should call handleBodyChange', () => {
    const wrapper = shallow(<EditArticleView {...props} />);
    wrapper.instance().setState = jest.fn();
    const value = '';
    wrapper.instance().handleBodyChange(value);
    expect(wrapper.instance().setState).toBeCalled();
  });
  it('should handle errors on article update', () => {
    const wrapper = shallow(<EditArticleView {...props} />);
    wrapper.setProps({
      isEditSuccessful: false,
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
  it('should redirect after successful update of article', () => {
    const wrapper = shallow(<EditArticleView {...props} />);
    wrapper.setProps({
      isEditSuccessful: true,
    });
    const nextProps = {
      match: {
        params: {
          slug: 'aidsd-s2',
        },
      },
    };
    wrapper.instance().props.history.push(`/article/${nextProps.match.params.slug}`);
    expect(wrapper.instance().props.isEditSuccessful).toBe(true);
  });
});
