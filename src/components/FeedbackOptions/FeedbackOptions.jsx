import { Component } from 'react';
import { PropTypes } from 'prop-types';
export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {Object.keys(options).map(key => {
          // key === 'good' ? (key = 'Good😀') : (key = key);
          // key === 'neutral' ? (key = 'Neutral😐') : (key = key);
          // key === 'bad' ? (key = 'Bad🙁') : (key = key);
          return (
            <button key={key} name={key} onClick={e => onLeaveFeedback(e)}>
              {key}
            </button>
          );
        })}
      </>
    );
  }
}
