import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsCount: {},
  itemsList: [],
  totalAmount: 0,
  totalNumberOfItems: 0,
}

export const totalNumberOfItemsSelector = ({ cart }) => cart.totalNumberOfItems

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, price } = action.payload
      console.log(id, price)
      state.itemsCount[id] = (state.itemsCount[id] || 0) + 1
      if (state.itemsList.indexOf(id) === -1) {
        state.itemsList.push(id)
      }
      state.totalAmount += price
      state.totalNumberOfItems += 1
    },
    removeItem: (state, action) => {
      const { id, price } = action.payload
      const itemCount = state.itemsCount[id]
      const itemExists = itemCount > 0
      const isLastItem = itemCount === 1
      if (itemExists) {
        state.totalAmount -= price
        state.totalNumberOfItems -= 1
        if (isLastItem) {
          delete state.itemsCount[id]
          state.itemsList = state.itemsList.filter(i => i !== id)
        } else {
          state.itemsCount[id] -= 1
        }
      }
    },
    clear: (state) => {
      return initialState
    },
  },
})

export const { addItem, removeItem, clear } = cartSlice.actions

export default cartSlice.reducer
