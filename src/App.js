import "./styles.css";
import { useEffect, useState } from "react";
/**
 button start counter start from 10 to 0 
 ans stop 
 press 10...0  10...0 

*/
export default function App() {
  const [count, setCount] = useState(10);
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (count === 0 || !run) return;
    console.log(count);
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count, run]);

  const handleClick = () => {
    if (count === 0 || !run) {
      setCount(10);
      setRun(true);
    }
  };

  useEffect(() => {
    if (count === 0) {
      setRun(false);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Button Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleClick} disabled={count !== 0 && run}>
        {" "}
        Restart from 10
      </button>
    </div>
  );
}
