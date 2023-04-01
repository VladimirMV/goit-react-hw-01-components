import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.scss";

import TransactionHistoryItem from "./TransactionHistoryItem";

function TransactionHistory({ transactions }) {
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
        {transactions.map((transactionsItem) => (
          <tr key={transactionsItem.id} className={styles.tableRow}>
            <TransactionHistoryItem
              transactionType={transactionsItem.type}
              transactionAmount={transactionsItem.amount}
              transactionCurrency={transactionsItem.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.defaultProps = {
  transactions: [],
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default TransactionHistory;
