import { getHomeGoodPriceData } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk('fetchdata',async(payload) => {
  const res = await getHomeGoodPriceData()
  return res
} )



const homeSlice = createSlice({
  name:'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {},
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export default homeSlice.reducer