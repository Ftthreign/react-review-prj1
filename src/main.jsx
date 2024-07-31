/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./challange/challange1.jsx"
// import App from "./challange/challange3.jsx";
import App from "./challange/challange7";
// import App from "./exercise/exercise2.jsx";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header className="header">
//       <h1>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu() {
//   const isAvailable = pizzaData;
//   const len = isAvailable.length;

//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       {len > 0 ? (
//         <>
//           <p>
//             Authentic Italian cuisine. 6 Creative dishes to choose form. All
//             from our stone oven, all organic, all delicious
//           </p>
//           <ul className="pizzas">
//             {pizzaData.map((data) => {
//               return <Pizza pizzaObject={data} key={data.name} />;
//             })}
//           </ul>
//         </>
//       ) : (
//         <p>Our menu is Currently Empty</p>
//       )}
//     </main>
//   );
// }

// function Pizza({ pizzaObject }) {
//   return (
//     <li className={`${pizzaObject.soldOut ? "pizza sold-out" : "pizza"}`}>
//       <img src={pizzaObject.photoName} alt={pizzaObject.name} />
//       <div>
//         <h3>{pizzaObject.name}</h3>
//         <p>{pizzaObject.ingredients}</p>
//         <span>{pizzaObject.soldOut ? "SOLD OUT  " : pizzaObject.price}</span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHours = 3;
//   const closedHours = 22;
//   const isOpen = hour >= openHours && hour <= closedHours;

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <Order closedHours={closedHours} openHours={openHours} />
//       ) : (
//         <p>We're closed, please come again tomorrow, Sorry</p>
//       )}
//     </footer>
//   );
// }

// function Order({ closedHours, openHours }) {
//   return (
//     <div className="order">
//       <p>
//         We're open from {openHours}:00 until {closedHours}:00. Come visit our
//         restaurant
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
