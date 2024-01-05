import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function resetToggle() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step : {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((e) => e - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((e) => e + step)}>+</button>
      </div>
      <div>
        <p>
          {count === 0 && `Today date is  `}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${Math.abs(count)} days ago was `}
          <span>{date.toDateString()}</span>
        </p>
      </div>
      <div>
        {count !== 0 || step !== 1 ? (
          <button onClick={resetToggle}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
