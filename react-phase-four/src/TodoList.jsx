import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([]);
  let [inputValue, setInputValue] = useState("");

  function addNewTask() {
    setTodos((todos) => {
      return [...todos, { task: inputValue, id: uuidv4() }];
    });
    setInputValue("");
  }

  function changeInputValue(event) {
    setInputValue(event.target.value);
  }

  function deleteTodo(id) {
    setTodos((todos) => {
      return todos.filter((todo) => {
        return todo.id != id;
      });
    });
  }

  function upperCaseAll() {
    setTodos((todos) => {
      return todos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      });
    });
  }

  function updateOne(id) {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return { ...todo };
        }
      });
    });
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="enter your task"
        onChange={changeInputValue}
      />
      <button onClick={addNewTask}>Click Me!</button>
      <br />
      <hr />
      <br />
      <h4>Things to do : </h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.task}</span>
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              <button onClick={() => updateOne(todo.id)}>Update this</button>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
  );
}

export default TodoList;
