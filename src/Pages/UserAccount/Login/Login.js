import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import googleIcon from "../../../images/google.png";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const { error, loginUsingEmailPassword, loginUsingGoogle } = useAuth();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        loginUsingEmailPassword(loginEmail, loginPassword);
    };

    const handleLoginEmail = (event) => {
        setLoginEmail(event.target.value);
    };
    const handleLoginPassword = (event) => {
        setLoginPassword(event.target.value);
    };

    return (
        <div className="container login-page my-5">
            <div className="login-form-container">
                <div className="login-form">
                    <h2 className="text-center">Please Login</h2>
                    <form onSubmit={handleLogin}>
                        <p>Email:</p>
                        <input
                            onChange={handleLoginEmail}
                            type="email"
                            placeholder="Enter your email"
                        />
                        <p>Password: </p>
                        <input
                            onChange={handleLoginPassword}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <p className="text-danger" style={{ width: "250px" }}>
                            {error}
                        </p>
                        <input
                            className="login-btn"
                            type="submit"
                            value="Login"
                        />
                    </form>
                    <div>
                        <p>
                            Don't have an account?{" "}
                            <Link to="/register">Register</Link>
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-center my-4 text-secondary">
                        Or sign in using
                    </p>
                </div>
                <div>
                    <img
                        className="googleSignInIcon"
                        onClick={loginUsingGoogle}
                        src={googleIcon}
                        alt="google icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
