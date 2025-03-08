import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 3);
  }
  function decrement() {
    if(count>0)
    setCount(count - 2);
  }

  return (
    <>
      <div className="APP">
        <h1>count :{count}</h1>
        <button onClick={increment}>Add Me</button>
        <button onClick={decrement}>Remove Me</button>
        <span><input placeholder="Enter Your Password" type="password" />
        <button>submit</button> </span>
      </div>
      <div><ul><li>mango</li></ul>
      </div>
    </>
  );
}

export default App;
