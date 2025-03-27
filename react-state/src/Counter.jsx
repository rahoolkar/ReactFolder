import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count+1);
    console.log(count);
  }

  return (
    <>
      <h3>Counter = {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
    </>
  );
}

export default Counter;
