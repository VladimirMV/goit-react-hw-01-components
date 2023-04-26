import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory({ transactions = [] }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>Type</th>
          <th className={styles.tableHeader}>Amount</th>
          <th className={styles.tableHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            transactionType={type}
            transactionAmount={amount}
            transactionCurrency={currency}
            id={id}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

// Moved the default prop declaration to the function parameters by using the default parameter syntax.

// Destructured the transactions object in the map method parameters to access its properties directly.

// Added more prop types to the transactions object, as required by the component.

// Removed the curly braces around the function body to return the JSX directly.
