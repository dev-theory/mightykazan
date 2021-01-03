import { createSelector, createSlice } from '@reduxjs/toolkit'
import { itemByIdSelector } from '../itemsById'

const initialState = {
  itemsCount: {},
  itemsList: [],
  totalAmount: 0,
  totalNumberOfItems: 0,
}

function roundTo(num, decimals = 0) {
  const pow = Math.pow(10, decimals)
  return Math.round(num * pow) / pow
}

export const itemCountSelector = ({ cart }, id) => cart.itemsCount[id]

export const itemsListSelector = ({ cart }) => cart.itemsList

export const totalAmountSelector = ({ cart }) => cart.totalAmount

export const totalNumberOfItemsSelector = ({ cart }) => cart.totalNumberOfItems

export const itemSubTotalSelector = createSelector(
  itemCountSelector,
  itemByIdSelector,
  (count, item) => roundTo(item.price * count, 2)
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, price } = action.payload
      state.itemsCount[id] = (state.itemsCount[id] || 0) + 1
      if (state.itemsList.indexOf(id) === -1) {
        state.itemsList.push(id)
        state.itemsList.sort()
      }
      state.totalAmount = roundTo(state.totalAmount + price, 2)
      state.totalNumberOfItems += 1
    },
    removeItem: (state, action) => {
      const { id, price } = action.payload
      const itemCount = state.itemsCount[id]
      const itemExists = itemCount > 0
      const isLastItem = itemCount === 1
      if (itemExists) {
        state.totalAmount = roundTo(state.totalAmount - price, 2)
        state.totalNumberOfItems -= 1
        if (isLastItem) {
          delete state.itemsCount[id]
          state.itemsList = state.itemsList.filter(i => i !== id).sort()
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
