import { useParams, Link } from "react-router-dom"
import { useGtag } from "../../../hooks/useGtag"
import { productsPayload } from "../../../payloads/payloads"
import { useEffect, useState } from "react"

const Product = () => {
    const { id } = useParams()
    const { fireEvent } = useGtag();
    const [storage, setStorage] = useState();

    const handleAddToCart = () => {
        fireEvent('add_to_cart', productsPayload(id));
        setStorage(id);
    }

    useEffect(() => {
        localStorage.setItem('productId', id);
    }, [storage])

    useEffect(() => {
        fireEvent('view_item', productsPayload(id))
    }, [])

    return (
        <div>
            <h1>Product {id} </h1>
            <Link className="button-link" to="/ecommerce/cart" onClick={handleAddToCart}>Add to Cart</Link>
        </div>
    )
}

export default Product