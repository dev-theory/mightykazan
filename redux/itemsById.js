import { createSlice } from "@reduxjs/toolkit"
import initialState from "./itemsById.json"

export const itemByIdSelector = ({ itemsById }, id) => itemsById[id]

export const itemsByIdSlice = createSlice({
  name: "itemsById",
  initialState,
  reducers: {},
})

export default itemsByIdSlice.reducer
