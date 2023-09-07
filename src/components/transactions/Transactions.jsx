import css from "./Transactions.module.css";
import PropTypes from "prop-types";

export const Transactions = (props) => (
  <table className={css.transactionsHistory}>
    <thead className={css.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {props.transactions.map((item, index) => (
        <tr key={item.id} className={index % 2 === 0 ? css.odd : css.even}>
          <td className={css.cell}>{item.type}</td>
          <td className={css.cell}>{item.amount}</td>
          <td className={css.cell}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
