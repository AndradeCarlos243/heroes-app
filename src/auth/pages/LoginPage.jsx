import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

    const { handleLoginContext } = useContext( AuthContext );
    const navigate = useNavigate();
    const handleLogin = () => {
        handleLoginContext( 'Hámster' );
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate(lastPath, { replace: true });
    }

    return (
        <>
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />
                <button
                    className="btn btn-primary"
                    onClick={ handleLogin }
                    >
                    Login
                </button>
            </div>
        </>
    )
}
