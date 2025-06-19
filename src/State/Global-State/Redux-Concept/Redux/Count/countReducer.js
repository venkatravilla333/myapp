import { decrease, increase } from "./actionTypes";


var initialState = {
  count: 0
}

export var countReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case increase:
      return {
        count: state.count + 1
      }
      break;
    case  decrease:
      return {
        count: state.count - 1
      }
      break;
    default: 
      return state
  }
  
}