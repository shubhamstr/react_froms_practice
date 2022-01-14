import React, { useState } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  const inputEvent = (event) => {
    console.log("clicked" + event.target.value);
    setVal(event.target.value);
  }
  const inputEvent2 = (event) => {
    console.log("clicked" + event.target.value);
    setVal2(event.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setName(val);
    setName2(val2);
  }
  return (
    <>
      <div className="main">
        <form onSubmit={onSubmit}>
          <div className="inner">
            <h1>Hello {name} {name2}</h1>
            <input type="text" placeholder="Enter Your First Name" onChange={inputEvent} value={val} />
            <br />
            <input type="text" placeholder="Enter Your Last Name" onChange={inputEvent2} value={val2} />
            <br />
            <button type="submit">Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
