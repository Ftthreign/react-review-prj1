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

> Challange 3 Code

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

  function reset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <input
          type="range"
          min="1"
          max="366"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step : {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((e) => e - step)}> -</button>
        <input
          type="text"
          value={`${count} days`}
          onChange={() => setCount((e) => Number(e.target.value))}
        />
        <button onClick={() => setCount((e) => e + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0 && "Today date is "}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <span>
        {count !== 0 || step !== 0 ? (
          <button onClick={reset}>Reset</button>
        ) : null}
      </span>
    </>
  );
}
```
