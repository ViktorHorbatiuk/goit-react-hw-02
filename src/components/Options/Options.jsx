import css from './Options.module.css'


const Options = ({ updateFeedback, total, resetFeedback }) => {
  return (
    <div className={css.buttonList}>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {total ? (
        <button
          className={css.button}
          type="button"
          onClick={() => resetFeedback("reset")}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
