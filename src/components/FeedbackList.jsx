import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FeedbackItem } from "./FeedbackItem";
import { NoFeedbackYet } from "./NoFeedbackYet";

export function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  // Use in development
  // if (!isLoading && (!feedback || feedback.length === 0)) {
  //   return <NoFeedbackYet />;
  // }

  // Use in production
  if (!feedback || feedback.length === 0) {
    return <NoFeedbackYet />;
  }

  // Use in development
  // return isLoading ? (
  //   <Spinner />
  // ) : (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item) => (
  //         <motion.div
  //           key={item.id}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           transition={{ delay: 0.2 }}
  //         >
  //           <FeedbackItem key={item.id} item={item} />
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // );

  // Use in production
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}
