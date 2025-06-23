import { configureStore } from '@reduxjs/toolkit'

import countReducer from './Slices/countSlice'
import cakeReducer from './Slices/cakeSlice'
import postsReducer from './Slices/postsSlice'


export var store = configureStore({
  reducer: {
    countReducer,
    cakeReducer,
    postsReducer
  }
})