import PropTypes from "prop-types";

import styles from "./TransactionHistoryItem.module.scss";

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
