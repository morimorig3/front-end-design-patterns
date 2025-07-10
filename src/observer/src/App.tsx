import { useEffect, useState } from "react";
import "./App.css";
import Observable from "./Observer";

const observable = new Observable();

function logger(data: string) {
  console.log("Logger");
  console.log(`${Date.now()} ${data}`);
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // notifyを通してsubscribeしている関数に渡される
    observable.notify("Clicked");
    setCount((count) => count + 1);
  };

  useEffect(() => {
    const unsubscribe = observable.subscribe(logger);
    return unsubscribe;
  });

  return (
    <div className="card">
      <button onClick={handleClick}>count is {count}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
