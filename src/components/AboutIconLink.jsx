import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

export function AboutIconLink() {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: "/about",
          // search: "?sort=name",
          // hash: "#about",
        }}
      >
        <FaQuestion size={30} color="#fff" />
      </Link>
    </div>
  );
}
