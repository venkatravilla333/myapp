import { decrease, increase } from "./actionTypes"



export var increaseCount = () => {
  return {
    type: increase
  }
}

export var decreaseCount = () => {
  return {
    type: decrease
  }
}