const handleViewItem = () => {
    gtag("event", "view_item", {
        currency: "USD",
        value: 7.77,
        items: [
            {
                item_id: "SKU_12345",
                item_name: "Stan and Friends Tee",
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: "Google",
                item_category: "Apparel",
                item_category2: "Adult",
                item_category3: "Shirts",
                item_category4: "Crew",
                item_category5: "Short sleeve",
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: "green",
                location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                price: 9.99,
                quantity: 1,
                item_custom_dimension: "item_custom_dimension",
                item_custom_dimension2: "item_custom_dimension2",
                item_custom_dimension3: "item_custom_dimension3"
            }
        ]
    });
}

const handleAddToCart = () => {
    gtag("event", "add_to_cart", {
        currency: "USD",
        value: 7.77,
        items: [
            {
                item_id: "SKU_12345",
                item_name: "Stan and Friends Tee",
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: "Google",
                item_category: "Apparel",
                item_category2: "Adult",
                item_category3: "Shirts",
                item_category4: "Crew",
                item_category5: "Short sleeve",
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: "green",
                location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                price: 9.99,
                quantity: 1,
                item_custom_dimension: "item_custom_dimension",
                item_custom_dimension2: "item_custom_dimension2",
                item_custom_dimension3: "item_custom_dimension3"
            }
        ]
    });
}

const handlePurchase = () => {
    gtag("event", "purchase", {
        transaction_id: "T_12345",
        value: 25.42,
        tax: 4.90,
        shipping: 5.99,
        currency: "USD",
        coupon: "SUMMER_SALE",
        items: [
            {
                item_id: "SKU_12345",
                item_name: "Stan and Friends Tee",
                affiliation: "Google Merchandise Store",
                coupon: "SUMMER_FUN",
                discount: 2.22,
                index: 0,
                item_brand: "Google",
                item_category: "Apparel",
                item_category2: "Adult",
                item_category3: "Shirts",
                item_category4: "Crew",
                item_category5: "Short sleeve",
                item_list_id: "related_products",
                item_list_name: "Related Products",
                item_variant: "green",
                location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                price: 9.99,
                quantity: 1,
                item_custom_dimension: "item_custom_dimension",
                item_custom_dimension2: "item_custom_dimension2",
                item_custom_dimension3: "item_custom_dimension3"
            }]
    });
}
export { handleViewItem, handlePurchase, handleAddToCart }