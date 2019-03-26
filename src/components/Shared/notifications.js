import React from 'react';


export const UserDropdownMenu = props => (
  <ul className={`dropdown ${props.active}`}>
    <li><a href="/editor">Create an Article</a></li>
    <li><a href="/profile">My Profile</a></li>
    <li>
      <a
        id="logout"
        onClick={props.logOut}
        role="button"
        tabIndex="0"
      >
        Log out
      </a>
    </li>
  </ul>
);


const NotificationsDropdownMenu = (props) => {
  const notifications = props.notifications.slice();
  if (notifications.length > 4) {
    notifications.splice(4);
    notifications.push({
      message: 'see more',
      actionLink: '/notifications',
    });
  }
  return (
    <ul className={`note-dropdown ${props.active}`}>
      {notifications.map((notification, index) => (
        <li
          key={`note_${index}`}
          className={
          !notification.isUnread ? 'notification-item notification-unread'
            : 'notification-item'
        }
        >
          <a
            href="#"
            onClick={() => (props.markAsRead(notification.actionLink))}
          >
            {notification.message}
          </a>
        </li>
      ))
      }

    </ul>
  );
};

export default NotificationsDropdownMenu;
