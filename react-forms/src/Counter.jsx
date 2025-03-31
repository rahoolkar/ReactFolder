import { useEffect, useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  function changeCountx() {
    setCountx((countx) => {
      return countx + 1;
    });
  }

  function changeCounty() {
    setCounty((county) => {
      return county + 1;
    });
  }

  useEffect(function () {
    console.log("component rendered");
  },[countx,county]);

  return (
    <div>
      <h3>Countx = {countx}</h3>
      <button onClick={changeCountx}>+1</button>
      <hr />
      <h3>County = {county}</h3>
      <button onClick={changeCounty}>+1</button>
    </div>
  );
}
