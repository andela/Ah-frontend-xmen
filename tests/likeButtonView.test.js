import React from 'react';
import { shallow } from 'enzyme';
import { LikeButtonView } from '../src/views/Buttons/LikeButtonView';


describe('LikeButtonView', () => {
  it('should render without crashing', () => {
    const props = {
      getLikeStatus: jest.fn(),
      likeState: {
        liked: false,
        likesCount: 0,
      },
    };
    const wrapper = shallow(<LikeButtonView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });


  it('should call dispatch actionon handlelike', () => {
    const props = {
      slug: 'slug-213',
      isLikeBtn: true,
      likeAction: jest.fn(),
      getLikeStatus: jest.fn(),
      likeState: {
        liked: false,
        likesCount: 0,
      },
    };

    const wrapper = shallow(<LikeButtonView {...props} />);
    wrapper.instance().handleLike();
    expect(wrapper.instance().props.likeAction).toHaveBeenCalled();
  });
});
