/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import "./challange1.css";

const skillData = [
  {
    skills: "HTML+CSS",
    level: "Advanced",
    color: "#2662EA",
  },
  {
    skills: "Javascript",
    level: "Intermediate",
    color: "#EDF81D",
  },
  {
    skills: "Git and GitHub",
    level: "Advanced",
    color: "#E84F33",
  },
  {
    skills: "Java",
    level: "Beginner",
    color: "#176B87",
  },
  {
    skills: "Golang",
    level: "Beginner",
    color: "#e6B9DE",
  },
  {
    skills: "C++",
    level: "Intermediate",
    color: "#ff45ff",
  },
];

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro
            name="Fadhil"
            description="
my passion lies in software development, particularly web and mobile development. I'm self-taught and proficient in HTML, CSS, JavaScript, various frameworks, Java, and Kotlin."
          />
          <SkillList />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Avatar() {
  return (
    <img
      src="./pizzas/fadhil.jpeg"
      alt="fadhil"
      className="avatar"
      width={"100px"}
    />
  );
}

function Intro({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillData.map((skill) => {
        return <Skill objectOf={skill} />;
      })}
    </div>
  );
}
function Skill({ objectOf }) {
  return (
    <>
      <div className="skill" style={{ backgroundColor: `${objectOf.color}` }}>
        <span>{objectOf.skills}</span>
        <span>
          {objectOf.level === "Beginner" && "🥲"}
          {objectOf.level === "Intermediate" && "☕"}
          {objectOf.level === "Advanced" && "🤖"}
        </span>
      </div>
    </>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>Made With react.JS</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
