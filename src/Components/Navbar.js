import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectActiveUser, selectIsAuthenticated } from "../store/auth";
import { Link } from "react-router-dom";

export default function Navbar() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const activeUser = useSelector(selectActiveUser);
  
    const dispatch = useDispatch();
  
    function handleLogout() {
      dispatch(logout());
    }
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
                        <Link to="/gradebooks/create">Create gradebook</Link>
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
