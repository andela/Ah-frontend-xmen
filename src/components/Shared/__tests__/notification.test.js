import React from 'react';
import { shallow } from 'enzyme';
import NotificationsDropDownMenu from '../notifications';
import { UserDropdownMenu } from '../notifications';


describe('NotificationsDropdownMenu', () => {
  it('should render many notifications without crashing', () => {
    const notifications = [];
    for (let i = 0; i < 9; i += 1) {
      notifications.push({
        message: 'notifcation message',
      });
    }
    const props = {
      notifications,
    };
    const wrapper = shallow(<NotificationsDropDownMenu {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render many user dropdown without crashing', () => {
    const props = {};
    const wrapper = shallow(<UserDropdownMenu {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
