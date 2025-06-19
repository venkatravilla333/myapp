import { buycake } from "./actionTypes"


var initialState = {
  noOfCakes: 100
}

export var cakeReducer = (state=initialState, action) => {
  switch(action.type){
    case buycake:
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default:
      return state
  }
}