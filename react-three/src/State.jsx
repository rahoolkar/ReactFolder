import { useState } from "react";

function State(){
    let [count,setCount] = useState(0);
    console.log("outisde",count)
    function countInc(){
        setCount((currCountValue)=>{
            return currCountValue + 1;
        });
        console.log("inside",count);
    }

    return <button onClick={countInc}>Count : {count}</button>
}

export default State;