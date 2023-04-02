import PropTypes from 'prop-types';

import styles from './TransactionHistoryItem.module.scss';

export default function TransactionHistoryItem({
  transactionType,
  transactionAmount,
  transactionCurrency,
}) {
  return (
    <>
      <td className={styles.typeCell}>{transactionType}</td>
      <td className={styles.cell}>{transactionAmount}</td>
      <td className={styles.cell}>{transactionCurrency}</td>
    </>
  );
}

TransactionHistoryItem.propTypes = {
  transactionType: PropTypes.string.isRequired,
  transactionAmount: PropTypes.string.isRequired,
  transactionCurrency: PropTypes.string.isRequired,
};
// Данный код импортирует необходимые зависимости: модуль PropTypes
//  из библиотеки prop - types и стили из локального модуля
// TransactionHistoryItem.module.scss.Затем, экспортируется компонент
// TransactionHistoryItem, который принимает три свойства(transactionType,
//   transactionAmount, transactionCurrency) и выводит их в таблицу
//    с помощью JSX.В конце файла используется PropTypes для проверки
//     типов свойств, ожидаемых этим компонентом.Изменения вида таблицы
//      могут быть отражены в стилях, подключенных из модуля
// TransactionHistoryItem.module.scss.
