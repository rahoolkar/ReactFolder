import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");
  console.log(fullName);
  function changeName(event) {
    setFullName(event.target.valuebghnv);
  }
  return (
    <div>
      <label htmlFor="fullname">Name : </label>
      <input
        type="text"
        placeholder="enter your name"
        value={fullName}
        onChange={changeName}
        id="fullname"
      />
      <button>Submit</button>
    </div>
  );
}
