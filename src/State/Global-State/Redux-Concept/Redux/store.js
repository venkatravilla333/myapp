
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { countReducer } from './Count/countReducer'
import { cakeReducer } from './Cakes/cakeReducer'
import { postsReducer } from './ApiCall/postsReducer'
import { thunk } from 'redux-thunk' 


var rootReducer = combineReducers({
  countReducer,
  cakeReducer,
  postsReducer
})


export var store = createStore(rootReducer, applyMiddleware(thunk)) 
console.log(store)




