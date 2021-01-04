import { createSelector, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { itemByIdSelector } from '../itemsById'

const TAXES = 0.13

function getInitialState() {
  return {
    id: uuidv4(),
    itemsCount: {},
    itemsList: [],
    subtotalAmount: 0,
    taxesAmount: 0,
    totalAmount: 0,
    totalNumberOfItems: 0,
  }
}

function roundTo(num, decimals = 0) {
  const pow = Math.pow(10, decimals)
  return Math.round(num * pow) / pow
}

const calculateTaxesAmount = (state) => roundTo(state.subtotalAmount * TAXES, 2)

const calculateTotalAmount = (state) => roundTo(state.subtotalAmount + state.taxesAmount, 2)

export const cartSlice = createSlice({
  name: 'cart',
  initialState: getInitialState(),
  reducers: {
    addItem (state, action) {
      const { id, price } = action.payload
      state.itemsCount[id] = (state.itemsCount[id] || 0) + 1
      if (state.itemsList.indexOf(id) === -1) {
        state.itemsList.push(id)
        state.itemsList.sort()
      }
      state.subtotalAmount = roundTo(state.subtotalAmount + price, 2)
      state.taxesAmount = calculateTaxesAmount(state)
      state.totalAmount = calculateTotalAmount(state)
      state.totalNumberOfItems += 1
    },
    removeItem (state, action) {
      const { id, price } = action.payload
      const itemCount = state.itemsCount[id]
      const itemExists = itemCount > 0
      const isLastItem = itemCount === 1
      if (!itemExists) { return state }
      state.subtotalAmount = roundTo(state.subtotalAmount - price, 2)
      state.taxesAmount = calculateTaxesAmount(state)
      state.totalAmount = calculateTotalAmount(state)
      state.totalNumberOfItems -= 1
      if (isLastItem) {
        delete state.itemsCount[id]
        state.itemsList = state.itemsList.filter(i => i !== id).sort()
      } else {
        state.itemsCount[id] -= 1
      }
    },
    clear: {
      reducer: (state, action) => action.payload,
      prepare: () => ({ payload: getInitialState() }),
    },
  },
})

export const { clear } = cartSlice.actions

export default cartSlice.reducer

export const addItem = ({ id }) => (dispatch, getState) => {
  const item = itemByIdSelector(getState(), id)
  dispatch(cartSlice.actions.addItem({
    id,
    price: item.price,
  }))
}

export const removeItem = ({ id }) => (dispatch, getState) => {
  const item = itemByIdSelector(getState(), id)
  dispatch(cartSlice.actions.removeItem({
    id,
    price: item.price,
  }))
}


/* Redux State Selectors */

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
