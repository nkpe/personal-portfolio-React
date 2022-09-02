import React from "react";

export function NavBar () {
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