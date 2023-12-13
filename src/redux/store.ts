import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './Reducer/PostReducer'

export default configureStore({
  reducer: {
    posts:PostReducer
  },
})