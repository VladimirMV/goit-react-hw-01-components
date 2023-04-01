import PropTypes from 'prop-types';
import styles from './ProfileStats.module.scss';

export default function ProfileStats({ title, value }) {
  return (
    <>
      <span className={styles.label}>{title}</span>
      <span className={styles.quantity}> {value}</span>
    </>
  );
}

ProfileStats.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
