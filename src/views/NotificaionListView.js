
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import notificationsAction from '../actions/notificationsAction';


export class NotificationListView extends React.Component {
  render() {
    const notifications = this.props.notifications.map((notification, index) => {
      const iconClass = notification.isUnread ? 'fas fa-circle m-3' : 'far fa-circle m-3';

      return (
        <Link to={notification.actionLink}>
          <li className="list-group-item " key={index}>
            <i className={iconClass} />
            {notification.message}
          </li>
        </Link>

      );
    });

    return (
      <div className="note-list container p-3">
        <div className="display-3">
                All notifications
        </div>
        <hr />
        <ul>
          {notifications}
        </ul>
      </div>
    );
  }
}


export function mapStateToProps(state) {
  return {
    auth: state.Auth,
    notifications: state.notificationsReducer.notifications,
    hasUnread: state.notificationsReducer.hasUnread,
  };
}

export default connect(
  mapStateToProps,
  {
    getNotifications: notificationsAction,
    markAsRead: notificationsAction,
  },
)(NotificationListView);
