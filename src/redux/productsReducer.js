import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  productData: [],
  categories: [],
  search: "",
  sortType: "default",
  kinds: [],
  sugestions: []
};

export const productSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setproducts: (state, action) => {
      state.allProducts = action.payload;
      state.productData = action.payload;
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      const productData = state.allProducts.filter((product) => product.categories.indexOf(category) > -1);
      state.productData = productData;
    },
    searchProduct: (state, action) => {
        const name = action.payload;
        state.search = name || '';
        if (!name) {
          if (state.categories.length === 0) 
              state.productData = state.allProducts;
          else {
            state.productData = state.allProducts.filter((product) => state.categories.indexOf(product.category) > -1)
          }
        }
        if (name) {
            const productData = state.allProducts.filter((product) => product.name.includes(name));
            state.productData = productData;
        }
        
      },
    selectProduct: ( state, action ) => {
      const id = action.payload;
      const product = state.allProducts.filter((item) => item.id === id );
      state.productData = product[0];
      state.kinds = product[0].variants.kinds;
      state.sugestions = product[0].variants.sugestion;
    },
    removeCategory: (state, action) => {
      const category = action.payload;
      if (state.categories.length === 1) {
        state.productData = state.allProducts.filter((product) => product.name.includes(state.search));
        state.categories = [];
      } else {
        state.productData = state.productData.filter((product) => (product.category !== category) && product.name.includes(state.search));
        const newCategories = state.categories.filter((cat) => cat !== category);
        state.categories = newCategories;
      }

    },
    searchRangeProduct: (state, action) => {
        const priceRange = action.payload;
        state.productData = state.allProducts.filter((product) => (product.price >= priceRange[0]) && (product.price <= priceRange[1]));
    },
    sortProducts: (state, action) => {
      const {order, key} = action.payload;
      console.log(key, order, action.payload)
      state.productData = state.productData.sort((a, b) => order === 'up' ? a[key] - b[key] : b[key] - a[key]);
    },
  },
});


export const { searchProduct, setproducts, sortProducts , filterByCategory, removeCategory, selectProduct, searchRangeProduct } = productSlice.actions;

export default productSlice.reducer;