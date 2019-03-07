import React from 'react';
import { shallow } from 'enzyme';
import { NotificationListView, mapStateToProps } from '../src/views/NotificaionListView';


describe('<NotificaionListView', () => {
  it('should render without crashing', () => {
    const props = {
      notifications: [{
        message: 'sample notification',
        isUnread: false,
      }, {
        message: 'sample notification',
        isUnread: true,
      }],
    };
    const wrapper = shallow(<NotificationListView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const state = {
      Auth: true,
      notificationsReducer: {
        notifications: [],
        hasUnread: false,
      },
    };
    const expectedProps = {
      auth: true,
      notifications: [],
      hasUnread: false,

    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
