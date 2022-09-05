import React from "react";
import "./Home.css";
import profilePicture from '../../../images/me.jpg';

export function Home () {
    return (
        <section id="home-pg-main" className="vh">
            <div id="aside-left">
                <div id="wel-home-bkgrnd">
                    <h1>welcome to my portfolio</h1>
                    <div id="img-home-container">
                        <img src={profilePicture} alt="Naomi Pearse" />
                    </div>
                </div>
            </div>
            <aside id="aside-right">
            </aside>
        </section>
    )
}