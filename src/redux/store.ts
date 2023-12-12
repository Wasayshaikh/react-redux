import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Reducer/AuthReducer'

export default configureStore({
  reducer: {
   AuthUser:AuthReducer
  },
})