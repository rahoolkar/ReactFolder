import Product from "./Product";

function ProductTab() {
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center"
    }
  return (
    <div className="ProductTab" style={styles}>
      <Product title="Logitech MX Master" i={0}></Product>
      <Product title="Apple Pencil (2nd Gen)" i={1}></Product>
      <Product title="Zebronics Zeb-transformer" i={2}></Product>
      <Product title="Petronics Toad 23" i={3}></Product>
    </div>
  );
}

export default ProductTab;
