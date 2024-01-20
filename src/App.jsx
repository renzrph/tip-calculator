import "./index.css";
import { useState } from "react";
import TipAmountPerPerson from "./TipAmountPerPerson";
import TotalPerPerson from "./TotalPerPerson";
import Bill from "./Bill";
import PercentageSelection from "./PercentageSelection";
import NumberOfPeople from "./NumberOfPeople";
import ResetButton from "./ResetButton";

const App = () => {
  const [billValue, setBillValue] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const inputBillValue = (event) => {
    setBillValue("");
    const value = parseFloat(event.target.value);
    setBillValue(value);
  };

  const inputNumberOfPepleValue = (event) => {
    setNumberOfPeople("");
    const value = parseFloat(event.target.value);
    setNumberOfPeople(value);
  };

  const removeZeroBill = () => {
    if (billValue === 0) setBillValue("");
  };

  const removeZeroPeople = () => {
    if (numberOfPeople === 0) setNumberOfPeople("");
  };

  const resetButton = () => {
    setBillValue(0);
    setNumberOfPeople(0);
    setTipAmountPerPerson(0);
    setTotalPerPerson(0);
  };

  const handleClickTipAmount = (tip) => {
    const tipPercentage = (billValue * tip) / 100;
    const tipPerPerson = tipPercentage / numberOfPeople;
    const roundedTipPerPerson = tipPerPerson.toFixed(2);
    setTipAmountPerPerson(roundedTipPerPerson);
  };

  const handleClickTotal = (tip) => {
    const tipPercentage = (billValue * tip) / 100;
    const totalAmount = (billValue + tipPercentage) / numberOfPeople;
    const roundedTotalAmount = totalAmount.toFixed(2);
    setTotalPerPerson(roundedTotalAmount);
  };

  const customButton = (event) => {
    const customTip = event.target.value;
    handleClickTipAmount(customTip);
    handleClickTotal(customTip);
  };

  return (
    <>
      <div className="header">
        <h2 className="spli">SPLI</h2>
        <h2 className="tter">TTER</h2>
      </div>
      <main>
        <div className="input-values-container">
          <Bill
            bill={billValue}
            inputValue={inputBillValue}
            removeZero={removeZeroBill}
          />
          <div className="select-tip-container">
            <h4>Select Tip %</h4>
            <PercentageSelection
              tipAmount={handleClickTipAmount}
              total={handleClickTotal}
              custom={customButton}
            />
          </div>
          <div className="number-of-people-container">
            <div>
              <h4>Number of People</h4>
              <h4 className={numberOfPeople === 0 ? "zero-warning" : ""}>
                {numberOfPeople === 0 ? "Can't be Zero" : ""}
              </h4>
            </div>
            <NumberOfPeople
              people={numberOfPeople}
              peopleInputValue={inputNumberOfPepleValue}
              removeZero={removeZeroPeople}
            />
          </div>
        </div>
        <div className="results-container">
          <TipAmountPerPerson tipValue={tipAmountPerPerson} />
          <TotalPerPerson total={totalPerPerson} />

          <ResetButton
            reset={resetButton}
            bill={billValue}
            people={numberOfPeople}
          />
        </div>
      </main>
    </>
  );
};

export default App;
