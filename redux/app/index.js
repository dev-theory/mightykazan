import { createSlice } from '@reduxjs/toolkit'
export * from './selectors'

const initialState = {
  scrollTo: 0,
  currentScreen: '/'
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    scrollTo: (state, action) => ({
      ...state,
      scrollTo: action.payload
    }),
    showScreen: (state, action) => ({
      ...state,
      currentScreen: action.payload,
    }),
  },
})

const { showScreen } = appSlice.actions

export const showHome = () => (dispatch) => {
  dispatch(showScreen('/'))
}

export const scrollTo = (offsetTop) => (dispatch) => {
  dispatch(appSlice.actions.scrollTo(offsetTop))
  dispatch(showHome())
}

export const showCheckout = () => (dispatch) => {
  dispatch(showScreen('/checkout'))
}

export const showMenu = () => (dispatch) => {
  dispatch(showScreen('/menu'))
}
export const showShoppingBag = () => (dispatch) => {
  dispatch(showScreen('/shopping-bag'))
}

export default appSlice.reducer
