import PropTypes from "prop-types"
import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext, authReducer } from "./"

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );
    return { logged: !!user, user };
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );
    const handleLoginContext = async( username = '' ) => {
        const user = { id: 123, username };
        const login = {
            type: types.login,
            payload: user
        };

        localStorage.setItem('user', JSON.stringify( user ));
        dispatch( login );
    }

    const handleLoggoutContext = () => {
        localStorage.removeItem('user');
        const logout = { type: types.logout };
        dispatch( logout );
    }

    return (
        <AuthContext.Provider value = {{
                ...authState,
                handleLoginContext,
                handleLoggoutContext
            }}>
            { children }
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}