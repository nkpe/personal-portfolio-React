import React from "react";

export function NavBar () {
    const portfolioDropdown = document.getElementById("portfolio-dropdown");

const dropdownLinks = document.querySelectorAll("#portfolio-dropdown > *");
const navProjects = document.getElementById("nav-projects");
const portfolioSections = document.getElementById("portf-section");
const codeProjects = document.getElementById("portf-code");
const designProjects = document.getElementById("portf-design");

let dropdownState = null;

let onLoad = () => {
    portfolioDropdown.style.display = "none";
    dropdownState = false};

onLoad();

let navDropdownShow = (e) => {
    if (dropdownState === false){
    console.log(dropdownState); 
    portfolioDropdown.style.display = "flex";
    dropdownState = true;
    console.log(dropdownState);
} else {
    portfolioDropdown.style.display = "none";
    dropdownState = false;
}};

navProjects.addEventListener('click', navDropdownShow);
    return (
    <nav>
        <a href="index.html">home</a>
        <div class="nav-spacer">|</div>
        <a href="dist/pages/about.html">about</a>
        <div class="nav-spacer">|</div>
        <div id="projects-link">
            <div id="nav-projects">projects</div>
            <div id="portfolio-dropdown">
                <a href="dist/pages/portfolio-code.html">coding</a>
                <a href="dist/pages/portfolio-design.html">design</a>
            </div>
        </div>
        <div class="nav-spacer">|</div>
        <a href="dist/pages/contact-me.html" name="contact-me">contact</a>
    </nav>
    )
}