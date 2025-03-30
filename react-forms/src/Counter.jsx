import { useEffect, useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  useEffect(function () {
    console.log("use effect run");
  },[]);

  function increaseCountx() {
    setCountx((count) => {
      return count + 1;
    });
  }

  function increaseCounty() {
    setCounty((count) => {
      return count + 1;
    });
  }

  return (
    <div>
      <h4>Countx = {countx}</h4>
      <button onClick={increaseCountx}>+1</button>
      <h4>County = {county}</h4>
      <button onClick={increaseCounty}>+1</button>
    </div>
  );
}
