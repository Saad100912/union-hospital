import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>
                <span style={{ color: "indigo" }}>404</span> Page Not Found
            </h1>
            <h3>The page your are looking for doesn't exist. Sorry</h3>
            <Link className="btn btn-success" to="/home">
                Go to Home page
            </Link>
        </div>
    );
};

export default NotFound;
