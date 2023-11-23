import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useGtag } from "../../../hooks/useGtag";
import { productsPayload } from "../../../payloads/payloads";

const Cart = () => {
    const [id, setId] = useState();
    const { fireEvent } = useGtag();

    useEffect(() => {
        setId(localStorage.getItem("productId"))
    }, [])

    useEffect(() => {
        fireEvent("view_cart", productsPayload(id))
    }, [id])

    const handleBeginCheckout = () => {
        fireEvent("begin_checkout", productsPayload(id))
    }

    return (
        <div>
            <h1>Cart</h1>
            <Link className="button-link" to="/ecommerce/checkout" onClick={handleBeginCheckout}>Checkout</Link>
        </div>
    )
}

export default Cart