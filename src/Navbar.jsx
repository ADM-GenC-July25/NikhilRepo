import React from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
            <Link className="navbar-brand" to="/">
            </Link>
            <ul className="navbar-nav right-margin">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/developers" className="nav-link">Developer Bios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/developers/add" className="nav-link">Create Bio</Link>
                </li>
            </ul>
        </nav>

    );

}

export default Navbar;
