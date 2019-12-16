import { SET_DEVICE, BURGER_MENU_OPEN } from "./action"

const initialState = {
  device: undefined,
  burgerMenuOpen: false,
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
    case BURGER_MENU_OPEN:
      return { ...state, burgerMenuOpen: action.boolean }
    default:
      return state
  }
}
