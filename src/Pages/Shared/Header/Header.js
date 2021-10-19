import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";
import Button from "@restart/ui/esm/Button";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
    const { user, displayName, logOut } = useAuth();
    return (
        <div className="header">
            <Navbar expand="lg">
                <Container>
                    <Link to="/home">
                        <img src={logo} alt="website logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-bar me-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/about">About Us</Link>
                        </Nav>
                        <Navbar.Text className="header-user">
                            {user.email || user.displayName ? (
                                <div>
                                    <small className="text-light">
                                        {user.displayName}{" "}
                                    </small>
                                    <Button
                                        className="header-logout-btn"
                                        onClick={logOut}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            ) : (
                                <Link
                                    className="header-login-btn text-light"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            )}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
