import css from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = (props) => (
  <section className={css.statistics}>
    {props.title && <h2 className={css.title}>{props.title}</h2>}

    <ul className={css.stats}>
      {props.data.map((stat) => (
        <li key={stat.id} className={css.statsItem}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
