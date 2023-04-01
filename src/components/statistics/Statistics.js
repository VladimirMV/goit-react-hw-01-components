import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem.js";
import styles from "./Statistics.module.scss";

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>
        {stats.map((statInfo) => (
          <li
            key={statInfo.id}
            className={styles.item}
            style={{
              backgroundColor: getRGB(),
              width: `calc(100%/${stats.length})`,
            }}
          >
            <StatisticsItem
              label={statInfo.label}
              percentage={statInfo.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

function getRGB() {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
