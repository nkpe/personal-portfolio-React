import React from "react";
import "../Portfolio.css";
import dazzlingNailsHome from "../../../../images/coding-projects/dazzling-nails-homepage.png";
import pairsGame22 from "../../../../images/coding-projects/pair-colada-landing.png";
import flashQuizHome from "../../../../images/coding-projects/flashquiz-home.png";
import athenaHack22 from "../../../../images/coding-projects/athena-hack-circular-home-page.png";

function CodingPortfolioProjects({ projectImg, projectImgAlt, projectName, projectText, projectHostLink, hostLinkType, projectSourceLink }) {
    return (
        <div className="project-container">
            <a className="portf-proj-link portf-proj-img" target="_blank">
                <img src={projectImg} alt={projectImgAlt} />
            </a>
            <div className="portf-text">
                <h2>{projectName}</h2>
                <p>{projectText}</p>
                <ul className="project-link-list">
                    <li><a className="portf-proj-link" href={projectHostLink}
                        target="_blank">{hostLinkType}</a>
                    </li>
                    <a className="portf-proj-link" href={projectSourceLink} target="_blank">Source Code</a>
                </ul>
            </div>
        </div>
    )
}


export function CodingPortfolio() {
    return (
        <section className="portf-section" id="portf-code">
            <h1>coding projects</h1>
            <div className="portf-row">
                <CodingPortfolioProjects
                    projectImg={dazzlingNailsHome} projectImgAlt="Website for client called Dazzling Nails."
                    projectName="Dazzling Nails" projectText="My client, Dazzling Nails, requires an e-commerce website to sell their press on nails <br />
                   This project is still in development."
                    projectHostLink="https://dazzlingnails.netlify.app/" hostLinkType="Website" projectSourceLink="#" />

                <CodingPortfolioProjects
                    projectImg={pairsGame22} projectImgAlt="Pairs Game Website"
                    projectName="Pairs Game" projectText="As part of my web development studies I created a pairs game.
                    Technologies used: Javascript, HTML5, CSS3 and Bootstrap"
                    projectHostLink="https://nkpe.github.io/Pairs-Game/" hostLinkType="Website" projectSourceLink="https://github.com/nkpe/Pairs-Game" />
            </div>

            <div className="portf-row">
                <CodingPortfolioProjects
                    projectImg={flashQuizHome} projectImgAlt="Climbing Quiz website"
                    projectName="Flash Quiz" projectText="During my studies I made this quiz to practise vanilla Javascript, Bootstrap, CSS3 and HTML5.
                    This project uses Javascript to check the answer selected by the user. When the user selects 'finish', their score is shown as a fraction and percentage at the top of the page."
                    projectHostLink="https://nkpe.github.io/Climbing-Quiz/" hostLinkType="Website" projectSourceLink="https://github.com/nkpe/Climbing-Quiz" />

                <CodingPortfolioProjects
                    projectImg={athenaHack22} projectImgAlt="Website made during Athena Hackathon 2022 "
                    projectName="Circular" projectText="In June 2022 I took part as team in Athena Hackathon to create a website that would allow anyone to be able to access a laptop that was no longer needed
                    Technologies used: Vue.js , HTML5, CSS3 and Bootstrap"
                    projectHostLink="https://app.showcode.io/project/ce976759-1f9a-4de8-a78c-39d6c380bce5" hostLinkType="Submission" projectSourceLink="https://github.com/lucky-eight/laptop-library" />
            </div>
        </section>
    )
}