import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
// less than 500px - NavBarSm
function NavBarSm (){
    return (
        <div id="nav-sm"><i class="fa-solid fa-ellipsis"></i></div>
    )
}

function NavBarDropDown({display, handleCallback}) {
    return (
        <div id="portfolio-dropdown" style={{display: display}}>
            <Link to="portfolio/coding" onClick={handleCallback}>coding</Link>
            <Link to="portfolio/design" onClick={handleCallback}>design</Link>
        </div>
    )
}

function NavBar() {
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

export function ResponsiveNav () {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize);
        return _ => {
            window.removeEventListener('resize', handleResize)
        }

    })

    return (
       <>
            {dimensions.width < 500 ? 
            
            <NavBarSm />
            : 
            <NavBar />
            }
        </>
    )
}