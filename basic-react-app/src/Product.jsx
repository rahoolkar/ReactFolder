import "./Product.css";

function Product({ title, price, options = [] }) {
  let isDiscount = price > 30000;
  options = options.map((option) => {
    return <li>{option}</li>;
  });
  let styles = {
    backgroundColor: isDiscount ? "red" : "yellow",
  };
  return (
    <div className="Product" style={styles}>
      <h1>{title.toUpperCase()}</h1>
      <h5>This is Product Description</h5>
      <p>Item Price : {price.toLocaleString()}</p>
      {isDiscount ? (
        <p>Discount of 5% available</p>
      ) : (
        <a href="https://www.google.com">Get Discount</a>
      )}
      <p>{options}</p>
    </div>
  );
}

export default Product;
