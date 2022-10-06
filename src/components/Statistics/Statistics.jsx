import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        {/* <h2>Statistics</h2> */}
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
