import { Component } from 'react';
export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <button onClick={onLeaveFeedback} name="good">
          Good😀
        </button>
        <button onClick={onLeaveFeedback} name="neutral">
          Neautral😐
        </button>
        <button onClick={onLeaveFeedback} name="bad">
          Bad🙁
        </button>
      </>
    );
  }
}
