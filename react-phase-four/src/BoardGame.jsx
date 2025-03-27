import { useState } from "react";

function BoardGame() {
  let [moves, setMoves] = useState({
    blue: 0,
    green: 0,
    red: 0,
    yellow: 0,
  });

  let [arr, setArr] = useState([]);

  const updateBlue = () => {
    setMoves((moves) => {
      return { ...moves, blue: moves.blue + 1 };
    });
    setArr((arr) => {
      return [...arr, "blue moves"];
    });
  };

  const updateYellow = () => {
    setMoves((moves) => {
      return { ...moves, yellow: moves.yellow + 1 };
    });
    setArr((arr) => {
      return [...arr, "yellow moves"];
    });
  };

  const updateGreen = () => {
    setMoves((moves) => {
      return { ...moves, green: moves.green + 1 };
    });
    setArr((arr) => {
      return [...arr, "green moves"];
    });
  };

  const updateRed = () => {
    setMoves((moves) => {
      return { ...moves, red: moves.red + 1 };
    });
    setArr((arr) => {
      return [...arr, "red moves"];
    });
  };

  return (
    <div>
      {arr[arr.length - 1]}
      <p>Blue moves = {moves.blue}</p>
      <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
        +1
      </button>
      <p>Green moves = {moves.green}</p>
      <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
        +1
      </button>
      <p>Yellow moves = {moves.yellow}</p>
      <button
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={updateYellow}
      >
        +1
      </button>
      <p>Red moves = {moves.red}</p>
      <button style={{ backgroundColor: "red" }} onClick={updateRed}>
        +1
      </button>
    </div>
  );
}

export default BoardGame;
