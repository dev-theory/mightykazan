import { createSelector, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { itemByIdSelector } from '../itemsById'

const getInitialState = () => ({
  id: uuidv4(),
  itemsCount: {},
  itemsList: [],
  subtotalAmount: 0,
  taxesAmount: 0,
  totalAmount: 0,
  totalNumberOfItems: 0,
})

function roundTo(num, decimals = 0) {
  const pow = Math.pow(10, decimals)
  return Math.round(num * pow) / pow
}

const TAXES = 0.13

export const itemCountSelector = ({ cart }, id) => cart.itemsCount[id]

export const itemsListSelector = ({ cart }) => cart.itemsList

export const subtotalAmountSelector = ({ cart }) => cart.subtotalAmount

export const taxesAmountSelector = ({ cart }) => cart.taxesAmount

export const totalAmountSelector = ({ cart }) => cart.totalAmount

export const totalNumberOfItemsSelector = ({ cart }) => cart.totalNumberOfItems

export const itemSubtotalSelector = createSelector(
  itemCountSelector,
  itemByIdSelector,
  (count, item) => roundTo(item.price * count, 2)
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState: getInitialState(),
  reducers: {
    addItem: (state, action) => {
      const { id, price } = action.payload
      state.itemsCount[id] = (state.itemsCount[id] || 0) + 1
      if (state.itemsList.indexOf(id) === -1) {
        state.itemsList.push(id)
        state.itemsList.sort()
      }
      state.subtotalAmount = roundTo(state.subtotalAmount + price, 2)
      state.taxesAmount = roundTo(state.subtotalAmount * TAXES, 2)
      state.totalAmount = roundTo(state.subtotalAmount + state.taxesAmount, 2)
      state.totalNumberOfItems += 1
    },
    removeItem: (state, action) => {
      const { id, price } = action.payload
      const itemCount = state.itemsCount[id]
      const itemExists = itemCount > 0
      const isLastItem = itemCount === 1
      if (itemExists) {
        state.subtotalAmount = roundTo(state.subtotalAmount - price, 2)
        state.taxesAmount = roundTo(state.subtotalAmount * TAXES, 2)
        state.totalAmount = roundTo(state.subtotalAmount + state.taxesAmount, 2)
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
      return getInitialState()
    },
  },
})

export const { addItem, removeItem, clear } = cartSlice.actions

export default cartSlice.reducer
