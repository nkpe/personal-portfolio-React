import React from "react";
import { Link } from 'react-router-dom';

export function NavBar() {
    // const portfolioDropdown = document.getElementById("portfolio-dropdown");

    // const dropdownLinks = document.querySelectorAll("#portfolio-dropdown > *");
    // const navProjects = document.getElementById("nav-projects");
    // const portfolioSections = document.getElementById("portf-section");
    // const codeProjects = document.getElementById("portf-code");
    // const designProjects = document.getElementById("portf-design");

    // let dropdownState = null;

    // let onLoad = () => {
    //     portfolioDropdown.style.display = "none";
    //     dropdownState = false
    // };

    // onLoad();

    // let navDropdownShow = (e) => {
    //     if (dropdownState === false) {
    //         console.log(dropdownState);
    //         portfolioDropdown.style.display = "flex";
    //         dropdownState = true;
    //         console.log(dropdownState);
    //     } else {
    //         portfolioDropdown.style.display = "none";
    //         dropdownState = false;
    //     }
    // };

    // navProjects.addEventListener('click', navDropdownShow);

    return (
        <nav>
            <Link to="home">home</Link>
            <div class="nav-spacer">|</div>
            <Link to="about">about</Link>
            <div class="nav-spacer">|</div>
            <div id="projects-link">
                <div id="nav-projects">projects</div>
                <div id="portfolio-dropdown">
                    <Link to="portfolio/coding">coding</Link>
                    <Link to="portfolio/design">design</Link>
                </div>
            </div>
            <div class="nav-spacer">|</div>
            <Link to="contact" name="contact-me">contact</Link>
        </nav>
    )
}