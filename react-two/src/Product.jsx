import "./Product.css";

function Product({title,price,features}){
    let list = features.map((item)=>{
        return <li>{item}</li>
    })
    let color = {backgroundColor : price > 30000 ? "yellow" : "blue",color : "black"};
    return (
        <div className="Product" style={color}>
            <h1>{title}</h1>
            <h3>Price : {price.toLocaleString()}</h3>
            {price >= 30000 ? <p>Discount of 5%</p> : null}
            <ol>{list}</ol>
        </div>
    )
}

export default Product;