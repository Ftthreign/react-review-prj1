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
