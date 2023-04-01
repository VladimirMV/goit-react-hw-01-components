import PropTypes from "prop-types";
import styles from "./FriendListItem.module.scss";

function FriendListItem({ status, name, avatar }) {
  return (
    <>
      <span className={status ? styles.online : styles.offline}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.defaultProps = {
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
