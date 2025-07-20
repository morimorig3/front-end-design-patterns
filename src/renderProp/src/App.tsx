import { useState } from "react";
import "./App.css";

const Title = () => {
  console.log("render Title!!!");
  return <h1>☃️ Temperature Converter 🌞</h1>;
};

const Kelvin = ({ value = 0 }) => {
  return <div className="temp">{value + 273.15}K</div>;
};

const Fahrenheit = ({ value = 0 }) => {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
};

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {props.children(value)}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Title />
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </div>
  );
}

export default App;
