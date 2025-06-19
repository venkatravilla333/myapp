
import { combineReducers, createStore } from 'redux'
import { countReducer } from './Count/countReducer'
import { cakeReducer } from './Cakes/cakeReducer'


var rootReducer = combineReducers({
  countReducer,
  cakeReducer,
})


export var store = createStore(rootReducer) 
console.log(store)




