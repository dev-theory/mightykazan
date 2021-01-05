import { createSelector } from '@reduxjs/toolkit'
import { itemByIdSelector } from '../itemsById'

const TAXES_PERCENTAGE = 0.13

function roundTo(num, decimals = 0) {
  const pow = Math.pow(10, decimals)
  return Math.round(num * pow) / pow
}

export const itemCountSelector = ({ cart }, id) => cart.itemsCount[id]

export const itemsListSelector = ({ cart }) => cart.itemsList

export const itemSubtotalSelector = createSelector(
  itemCountSelector,
  itemByIdSelector,
  (count, item) => roundTo(item.price * count, 2)
)

export const subtotalAmountSelector = createSelector(
  state => state,
  itemsListSelector,
  (state, itemsList) => roundTo(
    itemsList
      .map(id => itemSubtotalSelector(state, id))
      .reduce((sum, amount) => sum + amount, 0),
    2
  )
)

export const taxesAmountSelector = createSelector(
  subtotalAmountSelector,
  (subtotal) => roundTo(subtotal * TAXES_PERCENTAGE, 2)
)

export const totalAmountSelector = createSelector(
  subtotalAmountSelector,
  taxesAmountSelector,
  (subtotal, taxes) => roundTo(subtotal + taxes, 2)
)

export const totalNumberOfItemsSelector = createSelector(
  state => state,
  itemsListSelector,
  (state, itemsList) => itemsList
    .map(id => itemCountSelector(state, id))
    .reduce(
      (totalNumberOfItems, count) => totalNumberOfItems + count,
      0
    )
)
