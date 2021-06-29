import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputlist, setInputList] = useState("apple");

  const IntialiseEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItem = () => {};

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Add a Item" onChange={IntialiseEvent} />
        <button onClick={listOfItem}> + </button>
        <ol>
          <li>{inputlist}</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
