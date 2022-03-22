import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { Card } from "./shared/Card";

export function NoFeedbackYet() {
  const { cardReverse } = useContext(FeedbackContext);

  return (
    <Card reverse={cardReverse}>
      <p>No Feedback Yet 😔</p>
    </Card>
  );
}
