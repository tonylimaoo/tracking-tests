export const productsPayload = (id) => {

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
                quantity: 1,
                item_custom_dimension: "teste 1",
                item_custom_dimension2: "teste 2",
                item_custom_dimension3: "teste 3"
            }
        ]
    }

    return payload
}

export const promotionsPayload = (id) => {

    const payload = {
        currency: "USD",
        value: id == 1 ? 7.77 : 14.99,
        creative_name: id == 1? "summer_banner2" : "winter_banner",
        creative_slot: id == 1 ? "featured_app_1" : "featured_app_2",
        promotion_id: id == 1 ?"P_12345" : "P_67890",
        promotion_name: id = 1 ? "Promoção de verão" : "Promoção de inverno",
        items: [
            {
                item_id: id,
                item_name: "product_1",
                affiliation: "Tracking Tests",
                discount: 2.22,
                index: 0,
                item_brand: "Tracking Tests",
                item_category: "Apparel",
                item_category2: "Adult",
                item_category3: "Shirt",
                item_category4: "Social",
                item_category5: "Long Sleeve",
                item_list_id: 1,
                item_list_name: "Main products",
                item_variant: "green",
                location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                price: 9.99,
                quantity: 1,
                item_custom_dimension: "item_custom_dimension",
                item_custom_dimension2: "item_custom_dimension2",
                item_custom_dimension3: "item_custom_dimension3"
            },
            {
                item_id: 2,
                item_name: "product_2",
                affiliation: "Tracking Tests",
                discount: 5.00,
                index: 0,
                item_brand: "Tracking Tests",
                item_category: "Clothes",
                item_category2: "Childish",
                item_category3: "Pant",
                item_category4: "Street",
                item_category5: "Skinny",
                item_list_id: 1,
                item_list_name: "Main products",
                item_variant: "red",
                location_id: "CGGdsSGkm12stts__sjDDSsaSdahHHS",
                price: 19.99,
                quantity: 1,
                item_custom_dimension: "item_custom_dimension",
                item_custom_dimension2: "item_custom_dimension2",
                item_custom_dimension3: "item_custom_dimension3"
            }
        ]
    }

    return payload
}