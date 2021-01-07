import { createSlice } from '@reduxjs/toolkit'

export const scrollToSlice = createSlice({
  name: 'scrollTo',
  initialState: 0,
  reducers: {
    scrollTo: (state, action) => action.payload,
  },
})

export const { scrollTo } = scrollToSlice.actions

export default scrollToSlice.reducer
