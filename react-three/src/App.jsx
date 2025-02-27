import './App.css'
import Button from "./button.jsx";
import Form from "./Form.jsx";

function hover(){
  console.log("mouse entered into paragraph")
}

function App() {
  return (
    <>
      <Button></Button>
      <p onMouseOver={hover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis atque corrupti aliquid repellendus eius eveniet modi odio repellat nulla?</p>
      <Form></Form>
    </>
  );
}

export default App
