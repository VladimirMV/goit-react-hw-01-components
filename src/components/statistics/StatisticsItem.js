import PropTypes from "prop-types";

import styles from "./StatisticsItem.module.scss";

export default function StatisticsItem({ label, percentage }) {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
