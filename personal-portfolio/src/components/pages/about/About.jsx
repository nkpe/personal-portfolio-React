import React from "react";
import "./About.css";

function AboutSection() {
    return (
        <section id="about-me" class="bio-blocks">
            <h1 id="h1-about">about</h1>
            <p id="p-about">A creative, logical thinker with a passion for stunning web designs and user interfaces. <br />
                I have a 2:1 in MDes Interior Design from Coventry University.
            </p>
        </section>
    )
}

function AboutBio() {
    return (
        <section id="bio-background" class="bio-blocks shadow-left">
            <h1 id="h1-bkgd">skills</h1>
            <p id="p-bkgd">
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                </ul>
            </p>
        </section>
    )
}

function AboutPresent() {
    return (
        <section id="bio-present" class="bio-blocks shadow-right">
            <h1 id="h1-present">at present</h1>
            <p d="p-present">Currently studying Full Stack Web Development having been working in the design
                industry for 3 and half years. </p>
        </section>
    )
}

function AboutInterests() {
    return (
        <section id="bio-interests" class="bio-blocks shadow-left">
            <h1 id="h1-interests">interests</h1>
            <p id="p-interests">Hobbies include rock climbing, cross stitching and hiking.</p>
        </section>
    )
}

export function AboutPage() {
    return (
        <section id="bio-page" class="long-page">
            <AboutSection />
            <AboutBio />
            <AboutPresent />
            <AboutInterests />
        </section>
    )
}   