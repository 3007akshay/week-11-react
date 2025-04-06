import { useState } from "react";

// import "./App.css";

//Custom Hook
function useCounter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((c) => c + 1);
  };
  return {
    count: count,
    increaseCount: increaseCount,
  };
}

function App() {
  const { count, increaseCount } = useCounter();
  return (
    <>
      <div onClick={increaseCount}>Increase {count}</div>
    </>
  );
}

export default App;
