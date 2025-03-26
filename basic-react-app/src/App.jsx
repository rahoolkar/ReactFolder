import "./App.css";
import Title from "./Title.jsx";
import Fragment from "./Fragment.jsx";
import { Description } from "./Description.jsx";
import ProductTab from "./ProductTab.jsx";

function App() {
  return (
    <div>
      <Title></Title>
      <Description></Description>
      <Fragment></Fragment>
      <hr />
      <ProductTab></ProductTab>
    </div>
  );
}

export default App;
