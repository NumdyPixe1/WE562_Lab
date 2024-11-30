/*import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/
import React from "react";
import { useState } from "react";

const myUser = { firstName: "Numdao", lastName: "Ratchamueangfang" };
const name = "";
//let time = new Date();

function formatName(MyUser) {
  return user.firstName + " " + user.lastName;
}

function App(props) {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date()); //Week 3

  function greeting() {
    if (time.getHours() < 12) {
      return "Good morning";
    } else if (time.getHours() < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  function RefreshClick() {
    console.log(new Date().toLocaleTimeString());
    setCount(count + 1);
  }
  setInterval(() => setTime(new Date()), 1000); //Week 3
  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <p>
        {greeting(props.name)}, {name}
      </p>
      <button onClick={RefreshClick}>Refresh:{count}</button>
      {/* <button onClick={() => setTime(new Date())}> Greeting </button>*/}
    </div>
  );
}

export default App;
