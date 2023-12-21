import { useState, useEffect } from "react"
import { useGtag } from "../../../hooks/useGtag"
import { productsPayload } from "../../../payloads/payloads"

const Checkout = () => {
    const [id, setId] =  useState();
    const {fireEvent} = useGtag();

    useEffect(() => {
        setId(localStorage.getItem("productId"));
    }, [])
    
    console.log(id);

    const handleAddShippingInfo = () => {
        const agregatedObj = productsPayload(id);
        const objectToAgregate = {
            coupon: id == 1 ? "Tracking Gift" : "Tracking Bonus",
            shipping_tier: id == 1 ? "Ground" : "Fly"
        } 

        const completePayload = Object.assign(agregatedObj, objectToAgregate);

        fireEvent("add_shipping_info", completePayload);
    }    

    const handleAddPaymentInfo = () => {
        const agregatedObj = productsPayload(id);
        const objectToAgregate = {
            coupon: id == 1 ? "Tracking Gift" : "Tracking Bonus",
            payment_type: id == 1 ? "bank_slip" : "credit_card"
        } 

        const completePayload = Object.assign(agregatedObj, objectToAgregate);

        fireEvent("add_payment_info", completePayload);
    }       

    const handlePurchase = () => {
        const agregatedObj = productsPayload(id);
        const objectToAgregate = {
            coupon: id == 1 ? "Tracking Gift" : "Tracking Bonus",
            shipping: id == 1 ? 20.00 : 10.00,
            tax: id == 1 ? 0.0 : 5.0,
            transaction_id: self.crypto.randomUUID()
        } 

        const completePayload = Object.assign(agregatedObj, objectToAgregate);

        fireEvent("purchase", completePayload);
    }       

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={handleAddShippingInfo}>Add Shipping Info</button>
            <button onClick={handleAddPaymentInfo}>Add Payment Info</button>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    )
}

export default Checkout