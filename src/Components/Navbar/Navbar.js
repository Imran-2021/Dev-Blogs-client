import React from "react";
import "./Navbar.css"
import {
    FaFacebookSquare,
    FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navv">
            <div className="container mainnv">
                <div className="logo">
                    <Link className="text-link" to="/"><h2>Dev-Blogs</h2></Link>
                </div>
                <div className="navitem">
                    <Link className="text-link text-linkr" to="/home">Home</Link>
                    <Link className="text-link text-linkr" to="/sign-in">Sign In</Link>
                    <Link className="text-link text-linkr" to="/bloggers">Bloggers</Link>
                    <Link className="text-link text-linkr" to="/admin">Admin</Link>
                    
                </div>
                <div className="icon">
                <a href="https://www.facebook.com/profile.php?id=100071106706650" target="_blank" rel="noreferrer"><FaFacebookSquare className="facebook" /></a>
                <a href="https://www.facebook.com/profile.php?id=100071106706650" target="_blank" rel="noreferrer"><FaLinkedin className="LinkedIn" /></a>
                    
                    {/* <Link to="/"><FaLinkedin className="LinkedIn" /></Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;