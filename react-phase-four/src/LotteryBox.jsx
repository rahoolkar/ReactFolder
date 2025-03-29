import { useState } from "react";
import { init, sum } from "./helper";
import Button from "./Button";

export default function LotteryBox() {
  let [ticket, setTicket] = useState(init(3));

  function getNewTicket(){
    setTicket(init(3));
  }

  return (
    <div>
      <h3>Lottery Game!</h3>
      {sum(ticket) === 15 ? <h2>Congratulations! You won !!</h2> : null}
      <div>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <Button actionFn={getNewTicket}></Button>
    </div>
  );
}
