import React from "react";
import "./Home.css";
import profilePicture from '../../../images/me.jpg';

export function Home() {
    return (
        <section id="home-pg-main" className="vh">
            <div id="aside-left">
                <h1>welcome to my portfolio</h1>
                <p>I'm Naomi Pearse, Junior Front End Developer with experience in the Design Industry.
                    I am driven by developing user centered products.
                    {/* HTML5, CSS3, Bootstrap, React.js and JavaScript training course. Working through modules in Angular, and Backend - Python, SQL and MySQL still to complete.
                    Throughout my project life-cycles, I used git & Github to manage my workflows and to release the latest */}
                </p>
            </div>
            <div id="img-home-container">
                <img src={profilePicture} alt="Naomi Pearse" />
            </div>
        </section>
    )
}