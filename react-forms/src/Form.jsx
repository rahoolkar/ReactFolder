import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((formData) => {
      let feild = event.target.name;
      let value = event.target.value;
      formData[feild] = value;
      return { ...formData };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      password: "",
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="enter username"
          value={formData.username}
          name="username"
          id="username"
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          placeholder="enter password"
          value={formData.password}
          name="password"
          id="password"
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Check
        </button>
      </form>
    </div>
  );
}
