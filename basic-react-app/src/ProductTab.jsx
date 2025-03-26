import Product from "./Product";

function ProductTab() {
    let options = ["hi-tech","electronics","durable"];
  return (
    <>
      <h3>This is a Product Tab</h3>
      <Product title="Laptop" price={4000} options={options}></Product>
      <Product title="Mobile" price={10000}></Product>
      <Product title="Headphones" price={5000}></Product>
    </>
  );
}

export default ProductTab;
// options2={{a:"hello",b:"meow"}}