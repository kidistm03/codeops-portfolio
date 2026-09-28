import "./Spinner.css";

function Spinner({ message = "Loading..." }) {
  return (
    <div className="spinner" role="status">
      <div className="spinner-circle" />
      <p>{message}</p>
    </div>
  );
}

export default Spinner;
