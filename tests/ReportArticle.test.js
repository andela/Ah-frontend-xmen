import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ReportArticle from '../src/components/Articles/ReportArticle';

describe('<Report Article />', () => {
  const props = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    onClick: jest.fn(),
  };

  it('tests the report Article component matches the snapshot', () => {
    const wrapper = shallow(<ReportArticle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
