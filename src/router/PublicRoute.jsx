import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


export const PublicRoute = ({children}) => {
    const { logged } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/';
    return logged ? <Navigate to={ lastPath } /> : children;
}

PublicRoute.displayName = "PublicRoute";

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired
}