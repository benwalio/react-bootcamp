import React, { useState, useEffect } from "react";

function CounterHook() {
    const [state, setstate] = useState(0);
    useEffect(() => {
        document.title=`u clik ${state} tim`
    })
  return (
    <div>
      <h1>counter butts press: {state}</h1>
      <button onClick={() => setstate(state + 1)}>butts</button>
    </div>
  );
}

export default CounterHook;
