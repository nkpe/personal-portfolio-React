import React from "react";
import { NavBar } from "./NavBar";
import logo from "../../images/logo2.png";

export function Header() {
    return (
    <header>
        <NavBar />
        <a class="logo-home" href="index.html">
            <img src={logo} alt="Logo for Naomi Pearse" />
        </a>
    </header>
    )
}