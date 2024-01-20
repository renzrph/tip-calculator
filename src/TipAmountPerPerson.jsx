import PropTypes from "prop-types";

const TipAmountPerPerson = ({ tipValue }) => {
  return (
    <div className="tip-amount-container">
      <div>
        <p className="tip-amount">Tip Amount</p>
        <small className="tip-amount-person">/ person</small>
      </div>
      <strong className="tip-amount-result-person">
        ${isNaN(tipValue) ? 0 : tipValue}
      </strong>
    </div>
  );
};

TipAmountPerPerson.propTypes = {
  tipValue: PropTypes.number.isRequired,
};

export default TipAmountPerPerson;
