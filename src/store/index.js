import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import entireRedcer from './modules/entire'

const store = configureStore({
  reducer: {
    home:homeReducer,
    entire:entireRedcer
  }
})

export default store

