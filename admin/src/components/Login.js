import React, { useContext, useState } from 'react'
import AuthContext from '../context/Auth/AuthContext'

const Login = () => {
    const { Login } = useContext(AuthContext)
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        Login(credentials.email, credentials.password)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Login Admin</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" autoComplete='' value={credentials.email} onChange={handleChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" autoComplete='' value={credentials.password} onChange={handleChange} name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    )
}

export default Login