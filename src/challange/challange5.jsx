import { useEffect, useState } from "react";

export default function App() {
  const [currency, setCurrency] = useState(1);
  const [curCurrency, setCurCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [Converted, setConverted] = useState("");

  const fetchAPI = async () => {
    const resultData = await fetch(
      `https://api.frankfurter.app/latest?amount=${currency}&from=${curCurrency}&to=${toCurrency}`
    );

    const data = await resultData.json();
    setConverted(data.rates[toCurrency]);
  };

  useEffect(() => {
    if (curCurrency === toCurrency) return setConverted(currency);
    fetchAPI();
  }, [curCurrency, currency, toCurrency]);

  function handleCurrencyChange(e) {
    const val = Number(e.target.value);
    if (val !== 0) {
      setCurrency(val);
    }
  }

  return (
    <div>
      <input type="text" value={currency} onChange={handleCurrencyChange} />
      <select
        onChange={(e) => setCurCurrency(e.target.value)}
        value={curCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        onChange={(e) => setToCurrency(e.target.value)}
        value={toCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        converted to {Converted}
        {toCurrency}
      </p>
    </div>
  );
}
