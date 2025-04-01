import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket } from "./helper";
import Button from "./Button";

export default function LoteryGame({ size, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(size));
  let isWin = winCondition(ticket);
  function handleClick() {
    setTicket(genTicket(size));
  }
  return (
    <div>
      <h3>Lottery Game!</h3>
      {isWin ? <h1>Congratulations! You won!!</h1> : null}
      <Ticket ticket={ticket}></Ticket>
      <Button handleClick={handleClick}></Button>
    </div>
  );
}
