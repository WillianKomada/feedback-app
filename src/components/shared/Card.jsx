import PropTypes from "prop-types";
// import { useContext } from "react";
// import FeedbackContext from "../context/FeedbackContext";

export function Card({ children, reverse }) {
  // const { cardReverse } = useContext(FeedbackContext);

  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  // return (
  //   <div
  //     className="card"
  //     style={{
  //       backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
  //       color: reverse ? "#fff" : "rgba(0, 0, 0, 0.4)",
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
