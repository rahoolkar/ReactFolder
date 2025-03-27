import { useState } from "react";

function TodoList() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");

  function addNewTask(event) {
    console.log(event.target.value);
    setTodos([...todos, input]);
  }

  function updateInputValue(event) {
    setInput(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="enter your tasks"
        onChange={updateInputValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Things to do : </h4>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
