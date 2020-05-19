import React, { useState } from "react";

function CounterHook() {
    const [state, setstate] = useState(0);
  return (
    <div>
      <h1>counter butts press: {state}</h1>
      <button onClick={() => setstate(state + 1)}>butts</button>
    </div>
  );
}

export default CounterHook;
