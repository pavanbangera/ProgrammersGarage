import React from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from 'react-router-dom';

const AuthState = (props) => {
    const navigate = useNavigate();
    const Login = async (email, password) => {
        const response = await fetch(`${process.env.REACT_APP_API}/api/auth/loginAdmin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('auth-token', json.success)
            console.log(localStorage.getItem('auth-token'))
            navigate('/');
        }
        else {
            alert(json.success)
        }
    }
    return (
        <AuthContext.Provider value={{ Login }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState