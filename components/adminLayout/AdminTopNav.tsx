"use client";

import "../../styles/layout/TopNav.css";
import {
    Bell,
    Menu,
    Search,
    Moon,
    Sun,
    LogOut,
    User,
    Settings,
} from "lucide-react";
import { useState } from "react";

export default function AdminTopNav({
    onMenuClick,
    onNavigate,
    onLogout,
    darkMode,
    onToggleDarkMode,
}: any) {
    const [showProfile, setShowProfile] = useState(false);

    return (
        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <header className={`topnav ${darkMode ? "dark" : ""}`}>
                <div className="topnav-left">
                    {/* <button className="menu-btn" onClick={onMenuClick}>
                        <Menu size={22} />
                    </button> */}

                    {/* <div className="search-box">
                        <Search size={18} className="search-icon" />
                        <input placeholder="Search..." />
                    </div> */}
                    {/* <div className="search-wrapper">
                        <Search className={`search-icon `} />

                        <input
                            type="text"
                            placeholder="Search achievements, people..."
                            className={`search-input`}
                        />
                    </div> */}
                    <div className="welcome-wrapper">
                        <h1 className={`welcome-title ${darkMode ? "dark" : ""}`}>
                            Welcome back, {'Sachin'}!
                        </h1>

                        <p className={`welcome-subtitle ${darkMode ? "dark" : ""}`}>
                            Let's make today amazing!
                            {/* Here&apos;s what&apos;s happening with your team today */}
                        </p>
                    </div>
                </div>

                <div className="topnav-right">
                    <button className={`${darkMode ? "icon-btn-light" : "icon-btn"}`} onClick={onToggleDarkMode}>
                        {darkMode ? <Sun /> : <Moon />}
                    </button>

                    <button className={`${darkMode ? "icon-btn-light" : "icon-btn"}`}>
                        <Bell />
                    </button>

                    <div className="profile-wrapper">
                        <button
                            className="profile-btn"
                            onClick={() => setShowProfile(!showProfile)}
                        >
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                                className="avatar"
                                alt="User"
                            />
                        </button>

                        {showProfile && (
                            <div className="profile-menu">
                                {/* <button onClick={() => onNavigate("profile")}>
                                    <User size={16} /> Profile
                                </button>
                                <button>
                                    <Settings size={16} /> Settings
                                </button> */}
                                <button className="logout" onClick={onLogout}>
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}
