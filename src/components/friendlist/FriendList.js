import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
          id={friend.id}
        />
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

// Этот код экспортирует функциональный компонент FriendList,
//   который отображает список друзей.Он импортирует PropTypes
//   из библиотеки prop - types для проверки props, импортирует
//    стили из файла FriendList.module.scss и импортирует компонент
// FriendListItem.

// FriendList ожидает props, содержащие массив объектов друзей.Этот
// массив отображается с помощью метода map и компонента FriendListItem.

//   PropTypes.arrayOf() и PropTypes.shape() проверяют,
//   что объект друзей содержит свойство ID, которое является числом.

// FriendList экспортируется по умолчанию.
