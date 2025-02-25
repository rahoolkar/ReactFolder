import "./Product.css"

function Title () {
    return <h1>This is a heading !</h1>
}

function Description(){
    return <h3>This is a description.</h3>
}

function Product () {
    return (
        <div className="Product">
            <p>This is a product Image</p>
            <h3>This is Product Title</h3>
            <h5>This is Product Description</h5>
        </div>
    )
}

export {Title,Description,Product};