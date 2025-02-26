import Product from "./Product.jsx";

function ProductTab () {
    let styles = {
        display : "flex",
        displayWrap : "wrap",
        justifyContent : "center",
        alignItems : "center"
    }
    return (
        <div style={styles}>
            <Product title="Logitech MX Master 3S" i={0}></Product>
            <Product title="Apple Pencil (2nd Gen)" i={1}></Product>
            <Product title="Zebronics Zeb-Transformer" i={2}></Product>
            <Product title="Portonics Toad 23 Wireless Mouse" i={3}></Product>
        </div>
    )
}

export default ProductTab;