import PropTypes from "prop-types";
import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import FeedbackContext from "../context/FeedbackContext";

export function Header({ text, bgColor, textColor, padding }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    padding: padding,
  };

  const { toogleCardReverse, cardReverse } = useContext(FeedbackContext);

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
      {cardReverse ? (
        <button onClick={() => toogleCardReverse()}>
          <FiSun />
        </button>
      ) : (
        <button onClick={() => toogleCardReverse()}>
          <FiMoon />
        </button>
      )}
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95",
  padding: "0 2rem",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
};
