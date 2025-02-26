import React from "react";
import '../styles/navbar.css';
import SearchBar from "./SearchBar";

export default function Navbar () {
    return (
        <div className="navbar">
            <img
                className="navbar_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo" 
            />
            <SearchBar />
            <img
                className="navbar_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="User Avatar" 
            />
        </div>
    );
};