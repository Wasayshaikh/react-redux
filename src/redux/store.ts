import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './Slices/PostSlice'

export default configureStore({
  reducer: {
    posts:PostReducer
  },
})