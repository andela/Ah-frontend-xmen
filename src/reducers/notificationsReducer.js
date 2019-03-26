import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  notifications: [],
  hasUnread: false,
};

const parseActionLink = (link) => {
  let slug;
  let username;
  if (link.includes('articles')) {
    slug = link.split('articles/')[1].split('/')[0];
    return `/article/${slug}`;
  }
  if (link.includes('profiles')) {
    username = link.split('profiles/')[1];
    return `/profiles/${username}`;
  }
  return link;
};

const parseNotification = (notification) => {
  const message = notification
    .message.split(' ')
    .map((item, index) => ((index + 1) % 5 === 0 ? `${item}\n` : item))
    .join(' ');
  const actionLink = parseActionLink(notification.action_link);
  const isUnread = !notification.is_read;
  return { message, actionLink, isUnread };
};

const notificationsReducer = (state = initialState, action) => {
  let notifications;
  let hasUnread;
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:

      notifications = action.payload.map(notification => (parseNotification(notification)));
      notifications = notifications.reverse();
      hasUnread = notifications[0].isUnread;

      return { ...state, notifications, hasUnread };
    default:
      return { ...state };
  }
};

export default notificationsReducer;
