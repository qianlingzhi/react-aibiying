import { getHomeDiscountData, getHomeGoodPriceData } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk('fetchdata',(payload, {dispatch}) => {
  getHomeGoodPriceData().then( res => {
    dispatch(homeGoodPriceDataAction(res))
  })
  getHomeDiscountData().then( res => {
    dispatch(homeDiscountDataAction(res))
  })
})


const homeSlice = createSlice({
  name:'home',
  initialState: {
    goodPriceInfo: {},
    discountInfo:{}
  },
  reducers: {
    homeGoodPriceDataAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    homeDiscountDataAction(state, { payload} ) {
      state.discountInfo = payload
    }
  },
})

export const {
  homeGoodPriceDataAction,
  homeDiscountDataAction
} = homeSlice.actions


export default homeSlice.reducer