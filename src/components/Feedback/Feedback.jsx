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
  };
  onClickIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onClickIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
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
          <li>Tolat: {this.countTotalFeedback}</li>
        </ul>
      </>
    );
  }
}
