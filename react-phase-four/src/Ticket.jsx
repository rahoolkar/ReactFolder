import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      {ticket.map((elem, index) => {
        return <TicketNum num={elem} key={index}></TicketNum>;
      })}
    </div>
  );
}
