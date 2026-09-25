import React, { useState } from "react";

function CounterButtonFunc() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>b. Counter(Functional Component)</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default CounterButtonFunc;