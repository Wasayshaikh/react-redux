import { createSlice } from "@reduxjs/toolkit";
type AuthType = {
    auth:{
        username:string,
        name:string,
    }|null,
    authStatus:boolean,
};
let initialState:AuthType= {
    auth:null,
    authStatus:false
}
const AuthReducer = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        getUsers(state, action){
            state.auth =action.payload
            state.authStatus= true
            console.log(action)
        }

    }
 
})
export const {getUsers } = AuthReducer.actions
export default AuthReducer.reducer


