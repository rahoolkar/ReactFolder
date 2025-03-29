import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([]);
  let [inputValue, setInputValue] = useState("");

  function addNewTask() {
    setTodos((todos) => {
      return [...todos, { task: inputValue, id: uuidv4(), isDone: false }];
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

  function markAsDone(id) {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return { ...todo };
        }
      });
    });
  }

  function markAll() {
    setTodos((todos) => {
      return todos.map((todo) => {
        return { ...todo, isDone: true };
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
              <span
                style={todo.isDone ? { textDecoration: "line-through" } : {}}
              >
                {todo.task}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              <button onClick={() => updateOne(todo.id)}>Update this</button>
              <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Upper Case All</button>
      <button onClick={markAll}>Marks all as Done</button>
    </div>
  );
}

export default TodoList;
