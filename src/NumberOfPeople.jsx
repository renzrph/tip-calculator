import PropTypes from "prop-types";

const NumberOfPeople = ({ people, peopleInputValue, removeZero }) => {
  return (
    <div className="person-icon-container">
      <img src="public/person.svg" alt="Icon" className="person-icon" />
      <input
        className={people === 0 ? "zero-warning-border" : "number-of-people"}
        type="number"
        value={people}
        onChange={peopleInputValue}
        onClick={removeZero}
      />
    </div>
  );
};

NumberOfPeople.propTypes = {
  people: PropTypes.number.isRequired,
  peopleInputValue: PropTypes.number.isRequired,
  removeZero: PropTypes.number.isRequired,
};

export default NumberOfPeople;
