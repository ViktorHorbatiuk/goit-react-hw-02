import css from "./Feedback.module.css"

const Feedback = ({ good, neutral, bad, total, positive }) => {
    return (
      <div>
        <ul>
          <li className={css.feedback}>Good: {good}</li>
          <li className={css.feedback}>Neutral: {neutral}</li>
          <li className={css.feedback}>Bad: {bad}</li>
          <li className={css.feedback}>Total: {total}</li>
          <li className={css.feedback}>Positive: {positive}%</li>
        </ul>
      </div>
    );
}

export default Feedback