import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = (props) => (
  <li className={css.friendItem}>
    <span className={props.isOnline ? css.online : css.offline}></span>
    <img
      src={props.avatar}
      alt={`${props.name}'s avatar`}
      className={css.avatar}
    />
    <p className={css.name}>{props.name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number,
};
