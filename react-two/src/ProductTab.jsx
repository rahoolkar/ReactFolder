import Product from "./Product.jsx";

function ProductTab(){
    let options = ["sci-fi","luxury","hot-item"]
    return (
        <>
            <Product title="Laptop" price={40000} features={options}></Product>
            <Product title="Mobile" price={20000} features={options}></Product>
            <Product title="Fridge" price={1000} features={options}></Product>
        </>
    )
}

export default ProductTab;