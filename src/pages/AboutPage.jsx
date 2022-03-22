import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/shared/Card";
import FeedbackContext from "../context/FeedbackContext";

export default function AboutPage() {
  const { cardReverse } = useContext(FeedbackContext);

  return (
    <Card reverse={cardReverse}>
      <div className="about">
        <h1>About this Project</h1>

        <p>This is a React App to leave feedback for a product or service</p>

        <p>Version: 1.0.0</p>

        <Link
          to={{
            pathname: "/",
          }}
        >
          Back to Home
        </Link>
      </div>
    </Card>
  );
}
