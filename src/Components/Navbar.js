import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({isAuthenticated, handleLogout}) {
    return (
        <nav>
            <ul>
                {isAuthenticated && (
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                )}
                {isAuthenticated && (
                    <li>
                        <Link to="/teachers">Teachers</Link>
                    </li>
                )}
                {isAuthenticated && (
                    <li>
                        <Link to="/my-gradebook">My gradebook</Link>
                    </li>
                )}
                {isAuthenticated && (
                    <li>
                        <button type="button" onClick={handleLogout}> Logout </button>
                    </li>
                )}
                {!isAuthenticated && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {!isAuthenticated && (
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
