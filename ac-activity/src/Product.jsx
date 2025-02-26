import Price from "./Price.jsx"
import "./Product.css"

function Product({title,desc,i}) {
    let oldprices = ["12,495","11,900","1,599","599"];
    let newprices = ["8,999","9,199","899","278"];
    let descs = [["8000 DPI for Corporate Majdoors","Intiative Surface"],["Intiative Surface","Designed For Students"],["Designed For Students","8000 DPI"],["Wireless","Designed For Students"]]
    return (
        <div className="Product">
            <h3>{title}</h3>
            <ol>
                <li>{descs[i][0]}</li>
                <li>{descs[i][1]}</li>
            </ol>
            <Price oldprice={oldprices[i]} newprice={newprices[i]}></Price>
        </div>
    )
}

export default Product;