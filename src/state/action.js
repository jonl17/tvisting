export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const OPEN_BURGER_MENU = "OPEN_BURGER_MENU"
export const openBurgerMenu = boolean => ({
  type: OPEN_BURGER_MENU,
  boolean,
})
export const REGISTER_FRONTPAGE_ITEMS = "REGISTER_FRONTPAGE_ITEMS"
export const registerFrontpageItems = items => ({
  type: REGISTER_FRONTPAGE_ITEMS,
  items,
})
