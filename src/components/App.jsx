import React from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    if (e === 'Good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (e === 'Neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (e === 'Bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  const totalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const positivePercentage = () => {
    if (totalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleFeedback}
        />{' '}
      </Section>

      <Section title="Statistics">
        {totalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
