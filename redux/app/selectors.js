export const isHomeOpenSelector = ({ app }) => app.currentScreen === "/"

export const isCheckoutOpenSelector = ({ app }) =>
  app.currentScreen === "/checkout"

export const isMenuOpenSelector = ({ app }) => app.currentScreen === "/menu"

export const isShoppingBagOpenSelector = ({ app }) =>
  app.currentScreen === "/shopping-bag"

export const scrollToSelector = ({ app }) => app.scrollTo
