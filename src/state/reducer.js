import {
  SET_DEVICE,
  OPEN_BURGER_MENU,
  REGISTER_FRONTPAGE_ITEMS,
} from "./action"

const initialState = {
  device: undefined,
  burgerMenuOpen: false,
  frontpageItems: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        device = `tablet`
      }
      if (action.width > 1050) {
        device = `browser`
      }
      return { ...state, device: device }
    case OPEN_BURGER_MENU:
      return { ...state, burgerMenuOpen: action.boolean }
    case REGISTER_FRONTPAGE_ITEMS:
      return { ...state, frontpageItems: action.items }
    default:
      return state
  }
}
