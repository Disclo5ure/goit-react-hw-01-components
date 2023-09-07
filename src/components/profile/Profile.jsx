import css from "./Profile.module.css";
import PropTypes from "prop-types";

export const Profile = (props) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={props.avatar} alt="User avatar" className={css.avatar} />
      <p className={css.username}>{props.username}</p>
      <p className={css.tag}>@{props.tag}</p>
      <p className={css.location}>{props.location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statsItem}>
        <p className={css.label}>Followers</p>
        <p className={css.quantity}>{props.stats.followers}</p>
      </li>
      <li className={css.statsItem}>
        <p className={css.label}>Views</p>
        <p className={css.quantity}>{props.stats.views}</p>
      </li>
      <li className={css.statsItem}>
        <p className={css.label}>Likes</p>
        <p className={css.quantity}>{props.stats.likes}</p>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  username: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
