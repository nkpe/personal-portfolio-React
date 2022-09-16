import React, { Component } from "react";
import "./About.css";

function AboutSection() {
    return (
        <section id="about-me" className="bio-blocks">
            <h1 id="h1-about">about</h1>
            <p id="p-about">A creative, logical thinker with a passion for stunning web designs and user interfaces. <br />
                I have a 2:1 in MDes Interior Design from Coventry University.
            </p>
        </section>
    )
}

function AboutBioLists({ bioListId, listHeading, listItems }) {
    const bioListItem = listItems.map((item) =>
        <li>{item}</li>
    );

    return (
        <div id={bioListId}>
            <h2>{listHeading}</h2>
            <ul listItems={listItems}>
                {bioListItem}
            </ul>
        </div>    
    )
}

function AboutBio() {

    return (
        <section id="bio-background" className="bio-blocks shadow-left">
            <h1 id="h1-bkgd">skills</h1>
            <p id="p-bkgd">
                <AboutBioLists bioListId="tech-languages" listHeading="Tech Languages" listItems={["HTML5", "CSS3", "Javascript"]} />
                <AboutBioLists bioListId="frameworks" listHeading="Frameworks & Libraries" listItems={["React", "Vue.js", "Bootstrap"]} />
                <AboutBioLists bioListId="dev-tools" listHeading="Development Tools" listItems={["VS Code", "Git", "GitHub", "Figma"]} />
                <AboutBioLists bioListId="design-tools" listHeading="Design Tools" listItems={["Adobe Suite (Illustrator, Photoshop, InDesign)"]} />
            </p>
        </section>
    )
}

function AboutPresent() {
    return (
        <section id="bio-present" className="bio-blocks shadow-right">
            <h1 id="h1-present">at present</h1>
            <p d="p-present">Currently studying Full Stack Web Development having been working in the design
                industry for 3 and half years. </p>
        </section>
    )
}

function AboutInterests() {
    return (
        <section id="bio-interests" className="bio-blocks shadow-left">
            <h1 id="h1-interests">interests</h1>
            <p id="p-interests">Hobbies include rock climbing, cross stitching and hiking.</p>
        </section>
    )
}

export function AboutPage() {
    return (
        <section id="bio-page" className="long-page">
            <AboutSection />
            <AboutBio />
            <AboutPresent />
            <AboutInterests />
        </section>
    )
}   