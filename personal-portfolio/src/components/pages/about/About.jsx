import React from "react";
import "./About.css";

function AboutBioLists({ bioListId, listHeading, listitems }) {
    const bioListItem = listitems.map((item) =>
        <li key={item}>{item}</li>
    );

    return (
        <div id={bioListId}>
            <h2>{listHeading}</h2>
            <ul listitems={listitems}>
                {bioListItem}
            </ul>
        </div>
    )
}

function AboutBio() {

    return (
        <section id="bio-background" className="bio-blocks shadow-left">
            <h1 id="h1-bkgd">skills</h1>
            <div id="p-bkgd">
                <AboutBioLists bioListId="tech-languages" listHeading="Tech Languages" listitems={["HTML5", "CSS3", "Javascript"]} />
                <AboutBioLists bioListId="frameworks" listHeading="Frameworks & Libraries" listitems={["React", "Vue.js", "Bootstrap"]} />
                <AboutBioLists bioListId="dev-tools" listHeading="Development Tools" listitems={["VS Code", "Git", "GitHub", "Figma"]} />
                <AboutBioLists bioListId="design-tools" listHeading="Design Tools" listitems={["Adobe Suite (Illustrator, Photoshop, InDesign)"]} />
            </div>
        </section>
    )
}

function BioBlocks({ bioBlockId, bioBlocksClass, bioBlockH1, bioContent }) {
    return (
        <section id={bioBlockId} className={bioBlocksClass}>
            <h1>{bioBlockH1}</h1>
            <p>{bioContent}</p>
        </section>
    )
}

export function AboutPage() {
    return (
        <section id="bio-page" className="long-page">
            <BioBlocks bioBlockId="about-me" bioBlocksClass="bio-blocks shadow-right" bioBlockH1="about" bioContent="Full Stack Developer working for Daemon consultancy as an Analyst Consultant, since March 2023. Organiser and co-host of the Artificial Intelligence and Deep Learning for Enterprise Meetup held in London.  

            Previously had a career in the design industry after graduating with an MDes in Interior Design. " />
            <AboutBio />
            <BioBlocks bioBlockId="bio-present" bioBlocksClass="bio-blocks shadow-right" bioBlockH1="at present" bioContent="Currently working at Daemon consultancy as an Analyst Consultant." />
            <BioBlocks bioBlockId="bio-interests" bioBlocksClass="bio-blocks shadow-left" bioBlockH1="interests" bioContent="Hobbies include rock climbing, hiking, photography and cross stitching." />
        </section>
    )
}   