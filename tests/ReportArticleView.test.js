import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import expect from 'expect';
import * as ActionTypes from '../src/actions/ActionTypes';
import reportArticleAction from '../src/actions/articleActions/reportArticleAction';
import { ReportArticleView } from '../src/views/ReportArticleView';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('report article action', () => {
  let store;
  jest.useFakeTimers();
  beforeEach(() => {
    store = mockStore({});
    localStorage.clear();
  });
  it('should have a type of REPORT_ARTICLE_SUCEEDS', () => {
    const payload = 'the reason i report is';
    const expectedAction = {
      type: ActionTypes.REPORT_ARTICLE_SUCCEEDS,
      payload: 'the reason i report is',
    };
    const result = ActionTypes.reportArticleSuccess(payload);
    expect(result).toEqual(expectedAction);
  });
  it('should be able to report an article', () => {
    const expectedAction = (reportArticleAction);
    expect(reportArticleAction).toEqual(expectedAction);
  });
  it('should handle submit', () => {
    localStorage.setItem('slug', '123');
    const props = {
      reportArticleAction: jest.fn(),
      handleSubmit: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(<ReportArticleView {...props} />);
    wrapper.instance().handleSubmit(event);
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle submit with state != ''", () => {
    localStorage.setItem('slug', '123');
    const props = {
      reportArticleAction: jest.fn(),
      handleSubmit: jest.fn(),
    };
    const event = { preventDefault: jest.fn() };
    const wrapper = shallow(<ReportArticleView {...props} />);
    wrapper.setState({ reason: 'something' });
    wrapper.instance().handleSubmit(event);
    const spy = jest.spyOn(wrapper.instance().props, 'reportArticleAction');
    expect(spy).toHaveBeenCalled();
  });

  it('should call handleInput', () => {
    const props = {
    };
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'reason',
        value: 'contains violent content',
      },
    };

    const wrapper = shallow(<ReportArticleView {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().handleInput(event);
    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should call handleCancel', () => {
    const props = {
    };
    localStorage.setItem('slug', '123');
    window.location.assign = jest.fn();
    const wrapper = shallow(<ReportArticleView {...props} />);
    wrapper.instance().handleCancel();
    expect(window.location.assign).toHaveBeenCalled();
  });
});
