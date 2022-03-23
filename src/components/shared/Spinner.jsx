import spinner from "../assets/spinner.gif";

export function Spinner() {
  return (
    <img
      src={spinner}
      alt="Spinner that show while the content is not loading"
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
}
