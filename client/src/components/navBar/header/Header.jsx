import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <h1 className="header-title">Elite Assets Management</h1>
                </div>
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li className="header-menu-item"><Link to="/">Home</Link></li>
                        <li className="header-menu-item"><Link to="/about">About</Link></li>
                        <li className="header-menu-item"><Link to="/contact">Contact</Link></li>
                        <li className="header-menu-item"><Link to="/plans">Plans</Link></li>
                        <li className="header-menu-item"><Link to="/policy">Policy</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
