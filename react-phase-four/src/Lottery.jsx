import { useState } from "react";
import { init } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ size = 3, winCondition }) {
  let [ticket, setTicket] = useState(init(size));

  function getNewTicket() {
    setTicket(init(size));
  }

  return (
    <div>
      <h3>Lottery Game!</h3>
      {winCondition(ticket) ? <h2>Congratulations! You won !!</h2> : null}
      <Ticket ticket={ticket}></Ticket>
      <button onClick={getNewTicket}>Get new Ticket $1</button>
    </div>
  );
}
