> THIS IS JUST REVIEW FOR ME FROM LEARN REACT.JS

> Challange 1 Code

```javascript
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
```

> Challange 2 Code

```javascript
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="data">
        <button onClick={() => setStep((e) => (e > 1 ? e - 1 : e))}>-</button>
        <p>Step : {step}</p>
        <button onClick={() => setStep((e) => (e < 10 ? e + 1 : e))}>+</button>
      </div>
      <div className="data">
        <button onClick={() => setCount((e) => e - step)}>-</button>
        <p>Count : {count}</p>
        <button onClick={() => setCount((e) => e + step)}>+</button>
      </div>
      <p className="data">
        <span>
          {count === 0 && "Today is "}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${Math.abs(count)} days ago was`}
        </span>
        <span> : {date.toDateString()}</span>
      </p>
    </>
  );
}
```
