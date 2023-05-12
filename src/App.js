import { useState } from "react";
import "./styles.css";

export default function App() {
  const name = "Ramesh";
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>the number is : {state}</h2>
      <button onClick={() => setState((prev) => prev + 1)}>plus</button>
      <button onClick={() => setState((prev) => prev - 1)}>minus</button>
    </div>
  );
}
