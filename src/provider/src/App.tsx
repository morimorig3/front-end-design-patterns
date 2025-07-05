import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import "./App.css";

const CountContext = createContext<number>(0);
const SetCountContext = createContext<Dispatch<SetStateAction<number>>>(
  () => undefined
);

function useCountContext() {
  const count = useContext(CountContext);
  const setCount = useContext(SetCountContext);
  return { count, setCount };
}

const CountContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <SetCountContext.Provider value={setCount}>
      <CountContext.Provider value={count}>{children}</CountContext.Provider>
    </SetCountContext.Provider>
  );
};

const Reset = () => {
  console.log("render reset button");
  const { setCount } = useCountContext();

  return (
    <div className="app-col">
      <button onClick={() => setCount(0)}>Reset count</button>
      <div>Last reset: </div>
    </div>
  );
};

const Button = () => {
  console.log("render button");
  const { count, setCount } = useCountContext();

  return (
    <div className="app-col">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Current count: {count}</div>
    </div>
  );
};
const HogeCoponents = () => {
  // useContextを利用していないので、再レンダリングされない
  console.log("render hoge components");
  return (
    <div className="app-col">
      <div>Hoge Hoge </div>
    </div>
  );
};

function App() {
  return (
    <CountContextProvider>
      <Button />
      <Reset />
      <HogeCoponents />
    </CountContextProvider>
  );
}

export default App;
