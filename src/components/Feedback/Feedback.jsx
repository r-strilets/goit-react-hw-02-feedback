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
        good: this.state.good + 1,
      };
    });
  };
  onClickIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: this.state.neutral + 1,
      };
    });
  };
  onClickIncrementBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
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
        </ul>
      </>
    );
  }
}
