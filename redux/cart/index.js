import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
export * from './selectors'

function getInitialState() {
  return {
    id: uuidv4(),
    itemsCount: {},
    itemsList: [],
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: getInitialState(),
  reducers: {
    addItem (state, action) {
      const { id } = action.payload
      state.itemsCount[id] = (state.itemsCount[id] || 0) + 1
      state.itemsList = Object.keys(state.itemsCount).sort()
    },
    removeItem (state, action) {
      const { id } = action.payload
      const itemCount = state.itemsCount[id]
      const itemExists = itemCount > 0
      const isLastItem = itemCount === 1
      if (!itemExists) {
        return state
      }
      if (isLastItem) {
        delete state.itemsCount[id]
        state.itemsList = Object.keys(state.itemsCount).sort()
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

export const { addItem, removeItem, clear } = cartSlice.actions

export default cartSlice.reducer