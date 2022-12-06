import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cost: 0,
    shippingCost: 30.5
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const products = state.products;
            if (!(products.findIndex(p => p.id === product.id) > -1)) {
                state.products = [...products, product];
                state.cost += product.price * product.qty;
            }

        },
        removeProductFromCart: (state, action) => {
            const product = action.payload;
            state.products = state.products.filter(p => p.id !== product.id);
            const productCost = product.price * product.qty;
            state.cost -= productCost;
        },
        EditProductQty: (state, action) => {
            const { id, quantity } = action.payload;

            const ProductIndex = state.products.findIndex((product) => product.id === id);
            const oldProductCost = state.products[ProductIndex].price * state.products[ProductIndex].qty;
            const newCost = state.products[ProductIndex].price * quantity;
            const cost = newCost - oldProductCost;
            state.cost += cost;
            state.products[ProductIndex].qty = quantity
        }
    },
});


export const { addToCart, removeProductFromCart, EditProductQty } = cartSlice.actions;

export default cartSlice.reducer;