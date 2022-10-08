import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./modules/Home/slices/bannerSlice";
import authSlice from "modules/Authentication/slices/authSlice";
import movieReducer from './reducer/movieReducer'

const store = configureStore({
  reducer: {
    banner: bannerSlice,
    auth: authSlice,
    movie:movieReducer
  },
});

export default store;
