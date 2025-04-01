import { useState } from "react";
import { genTicket, sum } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));

  function handleClick() {
    setTicket(genTicket(3));
  }
  return (
    <div>
      <h3>Lottery Game!</h3>
      {sum(ticket) === 15 ? <h1>Congratulations! You won!!</h1> : null}
      <div className="Ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={handleClick}>Get new ticket $1</button>
    </div>
  );
}
