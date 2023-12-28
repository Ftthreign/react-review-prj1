/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./App.jsx";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const isAvailable = pizzaData;
  const len = isAvailable.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {len > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((data) => {
            return <Pizza pizzaObject={data} key={data.name} />;
          })}
        </ul>
      ) : (
        <p>Our menu is Currently Empty</p>
      )}
    </main>
  );
}

function Pizza(probs) {
  if (probs.pizzaObject.soldOut) return null;
  return (
    <li className="pizza">
      <img src={probs.pizzaObject.photoName} alt={probs.pizzaObject.name} />
      <div>
        <h3>{probs.pizzaObject.name}</h3>
        <p>{probs.pizzaObject.ingredients}</p>
        <span>{probs.pizzaObject.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 8;
  const closedHours = 22;
  const isOpen = hour >= openHours && hour <= closedHours;

  // if (!isOpen) return <p>{new Date().toDateString()}</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until until {closedHours}:00. Come visit our restaurant
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We're closed, please come again tomorrow, Sorry</p>
      )}
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
