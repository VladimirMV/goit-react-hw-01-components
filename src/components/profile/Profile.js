import PropTypes from 'prop-types';
import styles from './Profile.module.scss';
import ProfileStats from './ProfileStats';

function Profile({
  avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  username,
  tag,
  location = 'no location',
  statistics = {},
}) {
  const statItems = Object.keys(statistics).map(keyStat => (
    <li key={keyStat} className={styles.item}>
      <ProfileStats title={keyStat} value={statistics[keyStat]} />
    </li>
  ));
  console.log('statItems', statItems);
  return (
    <section className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>{statItems}</ul>
    </section>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  statistics: PropTypes.object,
};

export default Profile;

// Imported PropTypes and styles from relevant modules.

// Created a functional component named Profile and destructured its props.

// Used object destructuring to create default props for the component.

// Created propTypes to validate the props passed to the component.

// Used JSX to render the component, mapping through the keys of the statistics object and rendering a child component called ProfileStats for each statistic.
