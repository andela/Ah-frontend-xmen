import React from 'react';
import { shallow } from 'enzyme';
import { toast } from 'react-toastify';
import { ArticleReadView, mapStateToProps } from '../src/views/ArticleReadView';


describe('ArticleReadView', () => {
  it('should render without crashing', () => {
    const props = {
      article: {
        title: 'test title',
        author: 'blash',
      },
      loading: false,
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      authState: {
        IsAuth: true,
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
      bookmarkState: {
        successMessage: '',
        errorMessage: '',
      },
    };
    const instance = shallow(<ArticleReadView {...props} />);
    instance.setProps({
      loading: false,
    });
    expect(instance).toMatchSnapshot();
  });

  it('should render 404 view without crashing', () => {
    const props = {
      article: {
        title: '',
      },
      loading: true,
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      authState: {
        IsAuth: true,
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
    };
    const instance = new ArticleReadView(props);
    instance.state = { notFound: true };
    expect(instance.render()).toMatchSnapshot();
  });


  it('should call setState after receiving props ', () => {
    const props = {
      bookmarks: [{ title: 'jj', slug: 'slug-as12' }],
      bookmarkState: {
        successMessage: '',
        errorMessage: '',
      },
      article: {
        title: 'test title',
        author: 'hello',
      },
      authState: {
        IsAuth: true,
      },
      bookmarkListing: jest.fn(),
      setState: jest.fn(),
      getSingleArticle: jest.fn(),
      componentWillReceiveProps: jest.fn(),
      match: {
        params: {
          slug: 'slug-as12',
        },
      },

    };
    const instance = shallow(<ArticleReadView {...props} />);
    instance.instance().setState = jest.fn();
    instance.instance().componentWillReceiveProps(props);
    expect(instance.instance().setState).toHaveBeenCalled();
  });

  it('should call getSingleArticle after will mount ', () => {
    const props = {
      articleReducer: {
        article: {
          title: 'test title',
        },
      },
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
    };
    const instance = new ArticleReadView(props);
    instance.componentWillMount();
    expect(instance.props.getSingleArticle).toHaveBeenCalled();
  });
  it('should call onBookmark ', () => {
    const props = {
      articleReducer: {
        article: {
          title: 'test title',
        },
      },
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      authState: {
        IsAuth: true,
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
      bookmarkArticle: jest.fn(),
    };
    toast.error = jest.fn();
    const instance = new ArticleReadView(props);
    instance.onBookmark({ preventDefault() {} });
    expect(instance.props.bookmarkArticle).toHaveBeenCalled();
  });
  it('should call handle flag ', () => {
    const props = {
      articleReducer: {
        article: {
          title: 'test title',
        },
      },
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
    };
    toast.error = jest.fn();
    const instance = new ArticleReadView(props);
    instance.handleFlag();
    expect(toast.error).toHaveBeenCalled();
  });

  it('should call handle flag without token', () => {
    const props = {
      articleReducer: {
        article: {
          title: 'test title',
        },
      },
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      getSingleArticle: jest.fn(),
      bookmarkListing: jest.fn(),
    };
    localStorage.setItem('token', '123');
    window.location.assign = jest.fn();
    const instance = new ArticleReadView(props);
    instance.handleFlag();
    expect(window.location.assign).toHaveBeenCalled();
  });
  it('should map state to props', () => {
    const state = {
      articleReducer: {
        article: {},
        loading: true,
      },
      bookmarkListReducer: {
        bookmarks: [{ title: 'ded', slug: 'dededd' }],
      },
    };
    expect(mapStateToProps(state)).toEqual({
      article: {},
      loading: true,
      bookmarks: [{ title: 'ded', slug: 'dededd' }],
    });
  });

  it('should call getSingleAction after rating', () => {
    const props = {
      articleReducer: {
        article: {
          title: 'test title',
        },
      },
      match: {
        params: {
          slug: 'slug-as12',
        },
      },
      getSingleArticle: jest.fn(),
      ratingAction: jest.fn(),
    };
    global.setTimeout = jest.fn();
    jest.useFakeTimers();
    const instance = new ArticleReadView(props);
    instance.changeRating(5, props.slug);
    expect(global.setTimeout).toHaveBeenCalled();
    expect(global.setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
    jest.runAllTimers();
  });

  it('should map state to props', () => {
    const state = {
      articleReducer: {
        article: {},
        loading: true,
      },
      bookmarkListReducer: {
        bookmarks: [],
        isBookmarked: undefined,
      },
    };
    expect(mapStateToProps(state)).toEqual({
      article: {},
      loading: true,
      bookmarks: [],
    });
  });
});
