import React, { useState } from "react";
import { Link } from 'react-router-dom';

function NavBarDropDown({display, handleCallback}) {

    return (
        <div id="portfolio-dropdown" style={{display: display}}>
            <Link to="portfolio/coding" onClick={handleCallback}>coding</Link>
            <Link to="portfolio/design" onClick={handleCallback}>design</Link>
        </div>
    )
}

export function NavBar() {
    const [display, setDisplay] = useState("none");

    const handleDropdownToggle = () => {
       display==="none" ? setDisplay("inline-flex") : setDisplay("none")
    };
    
    const handleCallback = () => {
        this.setDisplay("none");
    }

    return (
        <nav>
            <Link to="home">home</Link>
            <div className="nav-spacer">|</div>
            <Link to="about">about</Link>
            <div className="nav-spacer">|</div>
            <div id="projects-link">
                <div id="nav-projects" onClick={handleDropdownToggle}>projects</div>
                <NavBarDropDown display={display} handleCallback={handleCallback}/>
            </div>
            <div className="nav-spacer">|</div>
            <Link to="contact" name="contact-me">contact</Link>
        </nav>
    )
}