import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackStats } from "./components/FeedbackStats";
import { FeedbackForm } from "./components/FeedbackForm";

import FeedBackData from "./data/FeedbackData";

export default function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
    console.log(newFeedback.id);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
