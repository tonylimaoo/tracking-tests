export const productsPayload = (id) => {

    console.log("productsPayload")
    console.log(id)
    const payload = {
        currency: "USD",
        value: id == 1 ? 7.77 : 14.99,
        items: [
            {
                item_id: id,
                item_name: id == 1 ? "product_1" : "product_2",
                affiliation: "Tracking Tests",
                discount: id == 1 ? 2.22 : 5.00,
                index: 0,
                item_brand: "Tracking Tests",
                item_category: id == 1 ? "Apparel" : "Clothes",
                item_category2: id == 1 ? "Adult" : "Childish",
                item_category3: id == 1 ? "Shirt" : "Pant",
                item_category4: id == 1 ? "Social" : "Street",
                item_category5: id == 1 ? "Long Sleeve" : "Skinny",
                item_list_id: 1,
                item_list_name: "Main products",
                item_variant: id == 1 ? "green" : "red",
                location_id: id == 1 ? "ChIJIQBpAG2ahYAR_6128GcTUEo" : "CGGdsSGkm12stts__sjDDSsaSdahHHS",
                price: id == 1 ? 9.99 : 19.99,
                quantity: 1
            }
        ]
    }

    return payload
}