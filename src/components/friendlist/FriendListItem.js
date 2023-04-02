import PropTypes from 'prop-types';
import styles from './FriendListItem.module.scss';

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
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;

// Этот код экспортирует компонент React с именем FriendListItem,
//   который отображает информацию о друге в виде карточки.

// Он импортирует модули PropTypes и styles из файлов prop - types
//  и FriendListItem.module.scss соответственно.

// В блоке компонента FriendListItem происходит рендеринг карточки.
// Он принимает три свойства: status, name и avatar, используя их для
// создания отображения.В компоненте также настроено значение по умолчанию для свойства avatar.

// В блоке propTypes определены PropTypes для свойств компонента и установлены
// требования к типу их значений.

// Компонент экспортируется с использованием export default FriendListItem.
