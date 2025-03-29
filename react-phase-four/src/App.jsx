import "./App.css";
import Lottery from "./Lottery";
import {sum} from "./helper";

function App() {
  function winCondition(arr){
    return arr.every((elem)=> {
      return elem === arr[0];
    })
  }

  return <Lottery size={4} winCondition={winCondition}/>
}

export default App;
