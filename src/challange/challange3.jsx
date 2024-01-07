import { useState } from "react";
import "./styleChallange3.css";
/* eslint-disable react/prop-types */
function App() {
  return (
    <div className="card">
      <TipCalculator>
        <h2 className="title">TIP CALCULATOR</h2>
      </TipCalculator>
    </div>
  );
}

function TipCalculator({ children }) {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [myFriendTip, setmyFriendTip] = useState(0);

  const percentage = bill * ((2.5 * (0.1 * myTip + 0.1 * myFriendTip)) / 10);

  function handleReset() {
    setBill("");
    setMyTip(0);
    setmyFriendTip(0);
  }

  return (
    <div>
      {children}
      <BillInput billValue={bill} onChangeBillValue={setBill} />
      <SelectPercentage myTip={myTip} onSetTip={setMyTip}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage myTip={myFriendTip} onSetTip={setmyFriendTip}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} totalBill={percentage} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ billValue, onChangeBillValue }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="number"
        placeholder="Input your price here"
        step="10"
        value={billValue}
        onChange={(e) => onChangeBillValue(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ myTip, onSetTip, children }) {
  return (
    <div style={{ display: "flex", margin: "20px 0 ", gap: "20px" }}>
      <p>{children}</p>
      <select
        className="select-element"
        value={myTip}
        onChange={(e) => onSetTip(Number(e.target.value))}
      >
        <option value="1">Sangat Buruk</option>
        <option value="2">Kurang Memuaskan</option>
        <option value="3">Lumayan</option>
        <option value="4">Baik</option>
        <option value="5">Sangat Baik</option>
      </select>
    </div>
  );
}

function Output({ bill, totalBill }) {
  return (
    <h3>{`You must pay Rp. ${
      bill + totalBill
    } (Rp. ${bill} + Tip : ${totalBill.toFixed(2)})`}</h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset </button>;
}

export default App;
