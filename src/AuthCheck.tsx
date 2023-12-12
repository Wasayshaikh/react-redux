import { Navigate } from "react-router-dom";

type AuthProps = {
    authStatus : boolean,
    component:JSX.Element
}

const AuthCheck = ({authStatus, component}:AuthProps): React.ReactNode | null | JSX.Element =>{
    if (authStatus) {
        return (component)
    }
    return <Navigate to={"/login"} />
    ;
}
export default AuthCheck;
