import { useState } from "react";
import { Section } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions ";
import { Statistics } from "../Satistics/Satistics";
import { Notification } from "../Notification/Notification";
import { Container } from "./App.styled";

export function App() {
  const [good, setGoodOption] = useState(0);
  const [neutral, setNeutralOption] = useState(0);
  const [bad, setBadOption] = useState(0);

  const options = ["good", "neutral", "bad"];

  const leaveFeedback = (event) => {
      switch (event.target.name) {
      case "good":
        return setGoodOption(good + 1);

      case "neutral":
        return setNeutralOption(neutral + 1);

      case "bad":
        return setBadOption(bad + 1);

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(2);
  };

  return (
    <Container>
      <Section title="Please, leave feedback" />
      <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
}
