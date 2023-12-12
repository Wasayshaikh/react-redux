import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers } from "../Reducer/AuthReducer"

export const AuthAction = createAsyncThunk('Auth/getUsers', async () => {
    return {
        username:"Asdf",
        name:"asdf"
    }
  })
    
