import PropTypes from "prop-types";

const PercentageSelection = ({ tipAmount, total, custom }) => {
  return (
    <div className="percentage-selection">
      <button
        onClick={() => {
          tipAmount(5);
          total(5);
        }}
      >
        5%
      </button>
      <button
        onClick={() => {
          tipAmount(10);
          total(10);
        }}
      >
        10%
      </button>
      <button
        onClick={() => {
          tipAmount(15);
          total(15);
        }}
      >
        15%
      </button>
      <button
        onClick={() => {
          tipAmount(25);
          total(25);
        }}
      >
        25%
      </button>
      <button
        onClick={() => {
          tipAmount(50);
          total(50);
        }}
      >
        50%
      </button>
      <input
        className="custom-tip"
        type="number"
        placeholder="Custom"
        onChange={custom}
      />
    </div>
  );
};

PercentageSelection.propTypes = {
  tipAmount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  custom: PropTypes.number.isRequired,
};

export default PercentageSelection;
