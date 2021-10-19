import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Register.css";
import registerImg from "../../../images/registration-from.jpg";
import googleIcon from "../../../images/google.png";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { error, signUpUsingEmailPassword, loginUsingGoogle } = useAuth();

    const handleNameInput = (event) => {
        setName(event.target.value);
    };

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        signUpUsingEmailPassword(name, email, password);
    };

    return (
        <div className="container registration-form-container">
            <div className="row">
                <h2 className="text-center text-success mt-5">
                    Create a new account
                </h2>
                <div className="col-12 col-md-6 registration-form">
                    <form onSubmit={handleRegistration}>
                        <p>Display Name: </p>
                        <input
                            onChange={handleNameInput}
                            type="text"
                            placeholder="Enter your display name"
                            required
                        />
                        <p>Email:</p>
                        <input
                            onChange={handleEmailInput}
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                        <p>Password:</p>
                        <input
                            onChange={handlePasswordInput}
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                        <p className="text-danger">{error}</p>
                        <input
                            className="register-btn"
                            type="submit"
                            value="Register"
                        />
                        <div>
                            <p>
                                Already have an account?{" "}
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
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
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={registerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;
