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
            name="haerin"
            desctription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis luctus ultricies. Vestibulum tempus lorem eu scelerisque consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque et neque in enim imperdiet efficitur. "
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
      src="/images/fadhil.jpeg"
      alt="fadhil"
      className="avatar"
      width={"100px"}
    />
  );
}

function Intro(probs) {
  return (
    <div className="">
      <h1>{probs.name}</h1>
      <p>{probs.desctription}</p>
    </div>
  );
}

function SkillList() {
  return (``
    <div className="skill-list">
      <Skill skill="React Js " emoji="🗿" color="red" />
      <Skill skill="Javascript " emoji="😂" color="gold" />
      <Skill skill="Java " emoji="☕" color="#176B87" />
      <Skill skill="Golang " emoji="🐭" color="#E6B9DE" />
    </div>
  );
}

function Skill(probs) {
  return (
    <div className="skill" style={{ backgroundColor: probs.color }}>
      <span>{probs.skill}</span>
      <span>{probs.emoji}</span>
    </div>
  );
}

function Footer() {
  return <div className="footer">Made with react JS</div>;
}
```
