import React from 'react';
import { shallow } from 'enzyme';

import { toast } from 'react-toastify';
import { DislikeButtonView } from '../src/views/Buttons/DislikeButtonView';


describe('DislikeButtonView', () => {
  it('should render without crashing', () => {
    const props = {
      getDislikeStatus: jest.fn(),
      dislikeState: {
        disliked: false,
        dislikesCount: 0,
      },
    };
    const wrapper = shallow(<DislikeButtonView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toast.error with error', () => {
    const props = {
      getDislikeStatus: jest.fn(),
      dislikeState: {
        disliked: false,
        dislikesCount: 0,
      },
    };
    const wrapper = shallow(<DislikeButtonView {...props} />);
    const nextProps = {
      dislikeState: {
        errorMessage: {
          dislike: 'you must login first',
        },
      },

    };

    toast.error = jest.fn();
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(toast.error).toHaveBeenCalled();
  });

  it('should call dispatch action on handledislike', () => {
    const props = {
      slug: 'slug-213',
      isLikeBtn: false,
      dislikeAction: jest.fn(),
      getDislikeStatus: jest.fn(),
      dislikeState: {
        disliked: false,
        dislikesCount: 0,
      },
    };

    const wrapper = shallow(<DislikeButtonView {...props} />);
    wrapper.instance().handleDislike();
    expect(wrapper.instance().props.dislikeAction).toHaveBeenCalled();
  });
});
