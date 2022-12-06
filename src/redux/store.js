import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

export default configureStore({
  reducer: { products: productsReducer, cart: cartReducer },
});