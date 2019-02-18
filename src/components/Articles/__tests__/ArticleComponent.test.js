import { shallow } from 'enzyme';
import React from 'react';
import ArticleComponent from '../ArticleComponent';

describe('<ArticleComponent', () => {
  it('should render without crashing', () => {
    let props = {
      article: {
        title: 'test title',
        author: {
          username: 'testuser',
        },
        share_links: {
          fbshare: '',
          gpshare: '',
          twshare: '',
          mailshare: '',
        },
      },
    };
    let wrapper = shallow(<ArticleComponent {...props} />);
    expect(wrapper).toMatchSnapshot();

    props = {
      article: {
        title: '}test title',
        image: 'http://imageurl.com/article_image.jpg',
        author: {
          image: 'http://imageurl.com/avatar.jpg',
          first_name: 'first',
          last_name: 'last',
          username: 'testuser',
        },
        share_links: {
          fbshare: '',
          gpshare: '',
          twshare: '',
          mailshare: '',
        },
      },
    };
    wrapper = shallow(<ArticleComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
