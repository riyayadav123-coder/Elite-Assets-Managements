import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo Section */}
                <div className="header-logo">
                    <h1 className="header-title">Elite Assets Management</h1>
                </div>

                {/* Navigation Section */}
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li className="header-menu-item"><a href="#">Home</a></li>
                        <li className="header-menu-item"><a href="#">About</a></li>
                        <li className="header-menu-item"><a href="#">Contact</a></li>
                        <li className="header-menu-item"><a href="#">Plans</a></li>
                        <li className="header-menu-item"><a href="#">Policy</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
