import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../redux/Action/AuthAction";

const Logout = ():JSX.Element =>{
    const {AuthUser} = useSelector(state => state.AuthUser)
    const dispatch = useDispatch();
    const getUser = ()=>{
        dispatch(AuthAction())
        // console.log("asdf")
        console.log(AuthUser)
    }
    console.log(AuthUser)
    
    return (<>Logout
    <button onClick={()=>getUser()} className="w-20 h-20 bg-gray-400">Get user</button>
    </>)
}
export default Logout;