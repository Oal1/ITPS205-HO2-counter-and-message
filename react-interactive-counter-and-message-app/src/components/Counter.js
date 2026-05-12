function Counter({ count, setCount }) {
  const increase = () => setCount((prev) => prev + 1);

  const decrease = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);

  return (
    <div className="box">
      <h2>Counter: {count}</h2>

      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>

      {count >= 5 && <h3 className="goal">Goal Reached!</h3>}
    </div>
  );
}

export default Counter;