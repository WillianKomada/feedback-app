import PropTypes from "prop-types";

import { FeedbackItem } from "./FeedbackItem";
import { NoFeedbackYet } from "./NoFeedbackYet";

export function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <NoFeedbackYet />;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
