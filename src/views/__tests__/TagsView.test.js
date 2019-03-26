import React from 'react';
import { shallow } from 'enzyme';
import { TagListView } from '../TagsView';

const props = {
  tagList: ['ndh', 'djej'],
  fetchAllTags: jest.fn(),
  sliceStart: 1,
  sliceEnd: 1,
};

describe('<TagListView />', () => {
  it('should fetch all tags', () => {
    const wrapper = shallow(<TagListView {...props} />);
    wrapper.instance().componentWillMount();
    expect(wrapper.instance().props.fetchAllTags).toBeCalled();
  });
  it('should call handleLeftClick', () => {
    const wrapper = shallow(<TagListView {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().handleLeftClick();
    expect(wrapper.instance().setState).toBeCalled();
  });
  it('should call handleRightClick', () => {
    const wrapper = shallow(<TagListView {...props} />);
    wrapper.instance().handleLeftClick();
    wrapper.instance().setState = jest.fn();
    wrapper.instance().handleRightClick();
    expect(wrapper.instance().setState).toBeCalled();
  });
});
