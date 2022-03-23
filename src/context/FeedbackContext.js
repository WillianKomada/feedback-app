import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Buscar dados feedback
  const fetchFeedback = async () => {
    const response = await fetch(`feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    // setTimeout(() => setIsLoading(false), 2000);
    setIsLoading(false);
  };

  const [cardReverse, setCardReverse] = useState(false);

  const toogleCardReverse = () => {
    setCardReverse(!cardReverse);
    console.log(cardReverse);
  };

  // Add feedback to list
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([...feedback, data]);
  };

  // Remove feedback at list
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`feedback/${id}`, {
        method: "DELETE",
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        cardReverse,
        toogleCardReverse,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
