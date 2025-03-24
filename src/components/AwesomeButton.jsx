import "./AwesomeButton.css";

const AwesomeButton = ({ children, onMouseUp }) => {
  return (
    <button
      className="awesome-button primary"
      onMouseUp={onMouseUp}>
      {children}
    </button>
  );
};

export default AwesomeButton;
