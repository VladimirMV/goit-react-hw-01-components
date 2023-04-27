import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem.js';
import styles from './Statistics.module.scss';

function Statistics({ title = '', stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            label={label}
            percentage={percentage}
            key={id}
            length={stats.length}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;

// Изменения:

// Функция getRGB() была вынесена за пределы компонента Statistics() чтобы предотвратить перерисовку;

// Значение по умолчанию для свойства title было установлено в сигнатуре функции с помощью = "", чтобы избежать неопределенных значений;

// В функциональном компоненте использован более короткий синтаксис деструктуризации объекта при использовании свойств id, label и percentage;

// Добавлен PropTypes для свойств label и percentage в stats;

// Удалена точка с запятой после строки импорта styles.
