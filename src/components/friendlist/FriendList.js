import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";
import FriendListItem from "./FriendListItem.js";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li className={styles.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
