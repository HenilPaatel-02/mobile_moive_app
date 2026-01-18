// import { IMAGES } from "@/constants/image";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const defaultCategories = [
//   {
//     id: "1",
//     name: "Hot Coffee",
//     description: "Freshly brewed and hot",
//     price : "149",
//     image: IMAGES.hotCoffee,
//   },
//   {
//     id: "2",
//     name: "Cold Coffee",
//     description: "Chilled and refreshing",
//     price : "129",
//     image: IMAGES.ColdCoffee,
//   },
//   {
//     id: "3",
//     name: "Espresso",
//     description: "Strong and energizing",
//     price : "199",
//     image: IMAGES.espresso,
//   },
//   {
//     id: "4",
//     name: "Cappuccino",
//     description: "Creamy and classic",
//     price : "179",
//     image: IMAGES.cappuccino,
//   },
//   {
//     id: "5",
//     name: "Latte",
//     description: "Smooth and milky",
//     price : "159",
//     image: IMAGES.latte,
//   },
// ];

// export const loadCategoriesThunk = createAsyncThunk(
//   "categories/load",
//   async (_, thunkAPI) => {
//     try {
//       // placeholder for API call; we return the default list for now
//       return defaultCategories;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: { categories: [], loading: false, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loadCategoriesThunk.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loadCategoriesThunk.fulfilled, (state, action) => {
//         state.categories = action.payload;
//         state.loading = false;
//       })
//       .addCase(loadCategoriesThunk.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       });
//   },
// });

// export default categoriesSlice.reducer;
