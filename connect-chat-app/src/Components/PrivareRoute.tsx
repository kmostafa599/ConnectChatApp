import { Navigate, Outlet } from "react-router";
import {User} from '../types/User'

function PrivateRoute({authedUser}:{authedUser:User | null}) {
    console.log(authedUser)
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    if (authedUser) {
        return <Outlet/>;
    }
    return <Navigate replace to="/" />;
}

export default PrivateRoute;