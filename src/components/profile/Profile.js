import PropTypes from 'prop-types';
import styles from './Profile.module.scss';
import ProfileStats from './ProfileStats';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  statistics,
}) {
  return (
    <section className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.keys(statistics).map(keyStat => (
          <li key={keyStat} className={styles.item}>
            <ProfileStats title={keyStat} value={statistics[keyStat]} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Profile.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  location: 'no location',
  statistics: {},
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  statistics: PropTypes.object,
};
