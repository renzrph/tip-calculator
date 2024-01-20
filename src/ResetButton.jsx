import PropTypes from "prop-types";

const ResetButton = ({ reset, bill, people }) => {
  return (
    <button
      className="reset-button"
      onClick={reset}
      disabled={!bill || !people}
    >
      RESET
    </button>
  );
};

ResetButton.propTypes = {
  reset: PropTypes.number.isRequired,
  bill: PropTypes.number.isRequired,
  people: PropTypes.number.isRequired,
};

export default ResetButton;
