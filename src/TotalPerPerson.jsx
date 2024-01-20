import PropTypes from "prop-types";

const TotalPerPerson = ({ total }) => {
  return (
    <div className="total-container">
      <div>
        <p className="total-amount">Total</p>
        <small className="total-amount-person">/ person</small>
      </div>
      <strong className="total-amount-result-person">
        ${isNaN(total) ? 0 : total}
      </strong>
    </div>
  );
};

TotalPerPerson.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalPerPerson;
