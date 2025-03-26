import Price from "./Price.jsx";
import "./Product.css";

function Product({ title, i }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8000Dpi", "Best for students"],
    ["Surface durable", "8000Dpi"],
    ["Wireless and Portable", "Surface durable"],
    ["8000Dpi", "Wireless and Portable"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[i][0]}</p>
      <p>{description[i][1]}</p>
      <Price oldPrice={oldPrices[i]} newPrice={newPrices[i]}></Price>
    </div>
  );
}

export default Product;
