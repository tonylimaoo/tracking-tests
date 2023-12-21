import { Link } from "react-router-dom"

const ProductsList = () => {
    return (
        <div>
            <Link className="button-link" to="/ecommerce/product/1" > PDP 1</Link>
            <Link className="button-link" to="/ecommerce/product/2" >PDP 2</Link>
        </div>
    )
}

export default ProductsList