import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.scss';

export default function StatisticsItem({ label, percentage, length }) {
  const getRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <li
      className={styles.item}
      style={{ backgroundColor: getRGB(), width: `calc(100%/${length})` }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
