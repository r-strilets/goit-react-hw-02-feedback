import { Component } from 'react';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
  };

  onClickIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
  };

  onClickIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercentage: Math.round(
          (prevState.good / prevState.total) * 100
        ),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>
        <button onClick={this.onClickIncrementGood}>Good</button>
        <button onClick={this.onClickIncrementNeutral}>Neatural</button>
        <button onClick={this.onClickIncrementBad}>Bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neatural: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total ?? 0}</li>
          <li>Positive feedback: {positivePercentage ?? 0}%</li>
        </ul>
      </>
    );
  }
}
