/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentageMe, setPercentageMe] = useState(0);
  const [percentageFriend, setPercentageFriend] = useState(0);

  const totalBill = bill * ((percentageMe + percentageFriend) / 100);

  function handleReset() {
    setBill("");
    setPercentageMe(0);
    setPercentageFriend(0);
  }
  return (
    <div>
      <BillInput valueOf={bill} onSetBill={setBill} />
      <StatusServices percentage={percentageMe} onPercentage={setPercentageMe}>
        How did you like the service?
      </StatusServices>
      <StatusServices
        percentage={percentageFriend}
        onPercentage={setPercentageFriend}
      >
        How did your friend like the service?
      </StatusServices>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={totalBill} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ valueOf, onSetBill }) {
  return (
    <div>
      <label>How much was the bill : </label>
      <input
        type="text"
        value={valueOf}
        placeholder="input your bill here"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function StatusServices({ children, onPercentage, percentage }) {
  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px 0 " }}>
      <p>{children}</p>
      <select
        value={percentage}
        onChange={(e) => onPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was Okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="15">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <div>
      <h1>{`You Pay $${Number(bill + tip)} ($${bill} + $${tip.toFixed(
        2
      )} tip)`}</h1>
      ;
    </div>
  );
}
function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
export default App;
