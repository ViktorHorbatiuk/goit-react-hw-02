import { useEffect, useState } from "react";
import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";

function App() {
  const [optionsList, setOptionsList] = useState(() => {
    const localFeedback = window.localStorage.getItem("options");
      return localFeedback
        ? JSON.parse(localFeedback)
        : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("options", JSON.stringify(optionsList));
  }, [optionsList]);

  const resetFeedback = () => {
    setOptionsList({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback =
    optionsList.good + optionsList.neutral + optionsList.bad;
  const positiveFeedback = Math.round((optionsList.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setOptionsList({
      ...optionsList,
      [feedbackType]: optionsList[feedbackType] + 1,
    });
  };

  const Notification = () => {
    return <p>No feedback yet</p>;
  };

  return (
    <>
      <Description />
      <Options
        resetFeedback={resetFeedback}
        updateFeedback={updateFeedback}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          positive={positiveFeedback}
          total={totalFeedback}
          good={optionsList.good}
          neutral={optionsList.neutral}
          bad={optionsList.bad}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
