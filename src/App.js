import { useState } from "react";

import { FeedbackList } from "./components/FeedbackList";
import { Header } from "./components/Header";
import FeedBackData from "./data/FeedbackData";

export default function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  console.log(feedback.length);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
