import PropTypes from "prop-types";

const Bill = ({ bill, inputValue, removeZero }) => {
  return (
    <div className="bill-container">
      <h4>Bill</h4>
      <div className="dollar-icon-container">
        <img src="public/dollar.svg" alt="Icon" className="dollar-icon" />
        <input
          className="bill-value"
          value={bill}
          onChange={inputValue}
          onClick={removeZero}
          type="number"
        />
      </div>
    </div>
  );
};

Bill.propTypes = {
  bill: PropTypes.number.isRequired,
  inputValue: PropTypes.number.isRequired,
  removeZero: PropTypes.number.isRequired,
};

export default Bill;
