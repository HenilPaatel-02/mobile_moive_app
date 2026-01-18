import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";

// import categoriesReducer from "./categoriesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // categories: categoriesReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "cart", "favorites"], // persist only needed slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
