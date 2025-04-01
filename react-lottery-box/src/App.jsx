import "./App.css";
import LoteryGame from "./LoteryGame";
import { sum } from "./helper";

function App() {
  function winCondition(ticket) {
    return ticket.every((elem)=>{
      return elem === ticket[0];
    })
  }
  return (
    <>
      <LoteryGame size={4} winCondition={winCondition}></LoteryGame>
    </>
  );
}

export default App;
