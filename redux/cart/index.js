import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import {
  cartIdSelector,
  checkoutEmailSelector,
  itemsInCartSelector,
  taxesAmountSelector,
  totalAmountSelector,
} from "./selectors"

export * from "./selectors"

function getInitialState() {
  return {
    id: uuidv4(),
    checkoutEmail: "",
    checkoutInProgress: false,
    itemsQuantity: {},
    itemsList: [],
  }
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addItem(state, action) {
      const { id } = action.payload
      state.itemsQuantity[id] = (state.itemsQuantity[id] || 0) + 1
      state.itemsList = Object.keys(state.itemsQuantity).sort()
    },
    setCheckoutEmail(state, action) {
      state.checkoutEmail = action.payload
    },
    checkout(state, action) {
      state.checkoutInProgress = action.payload
    },
    removeItem(state, action) {
      const { id } = action.payload
      const itemQuantity = state.itemsQuantity[id]
      const itemExists = itemQuantity > 0
      const isLastItem = itemQuantity === 1
      if (!itemExists) {
        return state
      }
      if (isLastItem) {
        delete state.itemsQuantity[id]
        state.itemsList = Object.keys(state.itemsQuantity).sort()
      } else {
        state.itemsQuantity[id] -= 1
      }
    },
    clear: {
      reducer: (state, action) => action.payload,
      prepare: () => ({ payload: getInitialState() }),
    },
  },
})

export const {
  addItem,
  checkout,
  clear,
  removeItem,
  setCheckoutEmail,
} = cartSlice.actions

export const submitOrder = () => (dispatch, getState, api) => {
  const orderId = cartIdSelector(getState())
  const postalCode = google_tag_manager[
    process.env.NEXT_PUBLIC_GTM_ID
  ].dataLayer.get("postal_code")

  return api.put(`/orders/${orderId}`, {
    id: orderId,
    currency: "CAD",
    customer: {
      email: checkoutEmailSelector(getState()),
      postalCode,
    },
    items: itemsInCartSelector(getState()),
    tax: taxesAmountSelector(getState()),
    totalAmount: totalAmountSelector(getState()),
  })
}

export default cartSlice.reducer
