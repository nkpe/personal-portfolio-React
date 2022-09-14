import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
// less than 500px - NavBarSm

function NavBarDropDown({display, handleCallback}) {
    return (
        <div id="portfolio-dropdown" style={{display: display}}>
            <Link to="portfolio/coding" onClick={handleCallback}>coding</Link>
            <Link to="portfolio/design" onClick={handleCallback}>design</Link>
        </div>
    )
}

function NavBar({handleNavSmCallback}) {
    const [display, setDisplay] = useState("none");

    const handleDropdownToggle = () => {
       display==="none" ? setDisplay("inline-flex") : setDisplay("none")
    };
    
    const handleCallback = () => {
        this.setDisplay("none");
    }

    return (
        <nav>
            <Link to="home"  onClick={handleNavSmCallback}>home</Link>
            <div className="nav-spacer">|</div>
            <Link to="about"  onClick={handleNavSmCallback}>about</Link>
            <div className="nav-spacer">|</div>
            <div id="projects-link">
                <div id="nav-projects" onClick={handleDropdownToggle}>projects</div>
                <NavBarDropDown display={display} handleCallback={handleCallback}/>
            </div>
            <div className="nav-spacer">|</div>
            <Link to="contact" name="contact-me"  onClick={handleNavSmCallback}>contact</Link>
        </nav>
    )
}



function NavBarSm ({navBarShow , handleNavSmCallback , handleNavBarShow}){
    return (
        <div id="nav-sm">
            <i className="fa-solid fa-ellipsis" onClick={handleNavBarShow}></i>
            <div id="NavBarSmState" style={{display: navBarShow}}>
                <NavBar handleNavSmCallback={handleNavSmCallback}/>
            </div>
        </div>
    )
}



export function ResponsiveNav () {
    const [navBarShow, setNavBarShow] = useState("none");
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
   
    let handleNavBarShow = () => {
        navBarShow==="none" ? setNavBarShow("flex") : setNavBarShow("none")
    };

    let handleNavSmCallback = () => {
        this.setNavBarShow("none");
    }

    return (
       <>
            {dimensions.width < 500 ? 
            
            <NavBarSm navBarShow={navBarShow} handleNavBarShow={handleNavBarShow} handleNavSmCallback={handleNavSmCallback} />
            : 
            <NavBar />
            }
        </>
    )
}