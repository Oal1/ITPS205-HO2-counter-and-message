import { useState } from "react";
import Counter from "./components/Counter";
import MessageInput from "./components/MessageInput";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <h1>React Quiz App</h1>

      <Counter count={count} setCount={setCount} />

      <MessageInput message={message} setMessage={setMessage} />
    </div>
  );
}

export default App;