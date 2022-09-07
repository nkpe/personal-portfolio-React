import React from "react";
import { ResponsiveNav } from "./NavBar";
import logo from "../../images/logo2.png";

export function Header() {
    return (
    <header>
        <ResponsiveNav />
        <a className="logo-home" href="index.html">
            <img src={logo} alt="Logo for Naomi Pearse" />
        </a>
    </header>
    )
}