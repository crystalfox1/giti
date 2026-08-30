import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  );
}
