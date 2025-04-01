import TicketNum from "./TicketNum";

export default function Ticket({ticket}) {
    return (
        <div className="Ticket">
            {ticket.map((num,index)=>{
                return <TicketNum num={num} key={index}></TicketNum>
            })}
        </div>
    )
}
