> THIS IS JUST REVIEW FOR ME FROM LEARN REACT.JS

> Challange 1 Code

Go to [Challange 1 Code](src/challange/challange1.jsx)

> Challange 2 Code

Go to [Challange 2 Code](src/challange/challange2.jsx)

> Challange 3 Code

Go to [Challange 3 Code](src/challange/challange3.jsx)

> Challange 4 Code

Go to [Challange 4 Code](src/challange/challange4.jsx)

> When to use State in React?

<br><br>

<p align="center">
  <img src="public/When-to-use.png" alt="When to use">
</p>

<br><br>

> Where to use State in React?

<br><br>

<p align="center">
  <img src="public/Where-to-use.png" alt="Where to use">
</p>

> Component vs Component Instance vs Element

**Component :**

- Description of a piece of UI
- A component is a function that returns react elements (element tree), usually written as JSX
- Component usually called as a "Blueprint" or a "Template" of UI

```javascript
// component
function App() {
  return (
    <ChildComponent state/props>
  )
}
```

The blueprint or template here will create one or more **Component instances.**

**Component Instances :**

- Component instance are created when use the components
- React internally calls the component as a "child"
- Component Instance are the actual "Physical manifestation of a component"
- Component instance has it owns state and probs
- Each component instance has a lifecycle (initialization, mounting, updating, unmounting )

```javascript
function App() {
  return (
    // Component instance
    <ChildComponent state/props>
    {/* javascript logic here.. */}
  )
}
```

Each of them will return one or more **React Elements.**

**React Elements :**

- JSX is converted to a function Calls

```javascript
React.createElement();
```

- A react elements is the result of these function calls
- A react elements basically contains all the information necessary to create DOM elements

```javascript
function ChildComponent() {
  return (
    <div className="content">
      <h4>The content here</h4>
    </div>
  );
}
```

All of that will be converted to :

```javascript
React.createElement(
  "div",
  {
    className: "content",
  },
  React.createElement("h4", null, "The content here")
);
```

This React Elements will eventually be converted to actual **DOM Elements (HTML)**

**DOM Elements (HTML) :**

- DOM elements are the actual **visual representation** of the component instance in the browser

```xml
<div className="content">
  <h4>The content here</h4>
</div>
```

---

**NOTE :**
It's not react elements that are rendered to the DOM. React elements just live inside the React App and have nothing to do with the DOM. They are simply converted to DOM elements when they are painted on the screen
