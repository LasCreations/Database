import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [eccOpen, setEccOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-brand">
                    ⚡ HyperSync DB
                </Link>

                <nav className="header-nav">
                    <div
                        className="dropdown"
                        onMouseEnter={() => setEccOpen(true)}
                        onMouseLeave={() => setEccOpen(false)}
                    >
                        {/* Added onClick toggle for mobile/accessibility support */}
                        <button 
                            className="nav-item dropdown-toggle"
                            onClick={() => setEccOpen((prev) => !prev)}
                            type="button"
                        >
                            ECC <span className="chevron">▾</span>
                        </button>

                        {eccOpen && (
                            <div className="dropdown-menu">
                                <Link 
                                    to="/registration" 
                                    className="dropdown-item" 
                                    onClick={() => setEccOpen(false)}
                                >
                                    📋 Registration
                                </Link>
                                <Link 
                                    to="/participants" 
                                    className="dropdown-item" 
                                    onClick={() => setEccOpen(false)}
                                >
                                    👥 Participants
                                </Link>
                                <Link 
                                    to="/upload" 
                                    className="dropdown-item" 
                                    onClick={() => setEccOpen(false)}
                                >
                                    📤 Upload
                                </Link>
                                <div className="dropdown-divider" />
                                <Link 
                                    to="/delete" 
                                    className="dropdown-item danger" 
                                    onClick={() => setEccOpen(false)}
                                >
                                    🗑️ Delete
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/sponsors" className="nav-item">Sponsors</Link>
                    <Link to="/events" className="nav-item">Events</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;