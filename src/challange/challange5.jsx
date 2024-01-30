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

  const currencyData = ["USR", "EUR", "CAD", "INR", "IDR", "JPY"];

  const optionCurrency = currencyData.map((value) => {
    return (
      <option key={value} value={value}>
        {value}
      </option>
    );
  });

  return (
    <div>
      <input type="text" value={currency} onChange={handleCurrencyChange} />
      <select
        onChange={(e) => setCurCurrency(e.target.value)}
        value={curCurrency}
      >
        {optionCurrency}
      </select>
      <select
        onChange={(e) => setToCurrency(e.target.value)}
        value={toCurrency}
      >
        {optionCurrency}
      </select>

      {/* conditional rendering to check if currency is not same */}
      {curCurrency !== toCurrency ? (
        <p>
          {`the ${curCurrency} ${currency} converted to ${Converted.toLocaleString(
            "en-US"
          )} ${toCurrency} `}
        </p>
      ) : (
        <p>The currency is same </p>
      )}
    </div>
  );
}
