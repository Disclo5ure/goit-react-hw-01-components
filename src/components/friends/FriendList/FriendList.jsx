import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem";

export const FriendList = (props) => (
  <div className={css.friends}>
    <ul className={css.friendsList}>
      {props.friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
