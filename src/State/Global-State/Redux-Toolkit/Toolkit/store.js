import { configureStore } from '@reduxjs/toolkit'

import countReducer from './Slices/countSlice'
import cakeReducer from './Slices/cakeSlice'


export var store = configureStore({
  reducer: {
    countReducer,
    cakeReducer
  }
})