import React from "react";
import { Link } from 'react-router-dom';
import { ResponsiveNav } from "./NavBar";
import logo from "../../images/logo2.png";

export function Header() {
    return (
    <header>
        <ResponsiveNav />
        <Link className="logo-home" to="/">
            <img src={logo} alt="Logo for Naomi Pearse" />
        </Link>
    </header>
    )
}