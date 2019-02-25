import React from 'react';
import { shallow } from 'enzyme';
import UpdateProfile from '../src/components/UpdateProfile';

describe('update profile view', () => {
  it('should render without crashing', () => {
    const props = {
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      profile: {
        first_name: 'firstname',
        last_name: 'lastname',
        bio: 'today',
      },
    };
    const wrapper = shallow(<UpdateProfile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
