import { useState } from "react";

export default function FormData() {
  let [formData, setFormData] = useState({ username: "", password: "" });

  function handleInputChange(event) {
    let feild = event.target.name;
    let value = event.target.value;

    setFormData((formData) => {
      formData[feild] = value;
      return { ...formData };
    });
  }

  function handleForm(event) {
    event.preventDefault();
    console.log(formData);
    
    
  }
  return (
    <div onSubmit={handleForm}>
      <label htmlFor="username"></label>
      <input
        type="text"
        placeholder="enter your username"
        name="username"
        value={formData.username}
        id="username"
        onChange={handleInputChange}
      />
      <label htmlFor="password"></label>
      <input
        type="text"
        placeholder="enter your password"
        name="password"
        value={formData.password}
        id="password"
        onChange={handleInputChange}
      />
      <button onClick={handleForm}>Login</button>
    </div>
  );
}
