import React from "react";
import { Link } from "react-router-dom";
import "../Portfolio.css";
import studioApartmentImg from "../../../../images/design-projects/mini-apartment/living_room1.png";
import socialInterlaceImg from "../../../../images/design-projects/social-interlace/staircase.png";
import standingImg from "../../../../images/design-projects/exhibition-stand/exhibstand.png";
import engineeringRecepImg from "../../../../images/design-projects/pailtonengineering/pailtondesk1.png";

function DesignPortfolioProjects({ projectImg, projectImgAlt, projectName, projectText, projectPage}) {
    return (
        <div className="project-container">
            <a className="portf-proj-link portf-proj-img" target="_blank">
                <img src={projectImg} alt={projectImgAlt} />
            </a>
            <div className="portf-text">
                <h2>{projectName}</h2>
                <p>{projectText}</p>
                <div className="project-link-list">
                    <Link to={projectPage} target="_blank">More info</Link>
                </div>
            </div>
        </div>
    )
}

export function DesignPortfolio() {
    return (
        <section className="portf-section" id="portf-design">
            <h1>design portfolio</h1>
            <div className="portf-row">
                <DesignPortfolioProjects
                    projectImg={studioApartmentImg} projectImgAlt="Studio Apartment Render"
                    projectName="Studio Apartment" projectText="A luxury miniature studio apartment sits inside a converted office block. The apartment may be small at only 25.9 metres square, however it still contains all the essentials for living, including an en-suite, whilst maximising space. Designed for a busy professional to live in during the week. The size of the space provided a challenge to incorporate all aspects of a residential space. Large windows cover all of the exterior facing wall, ensuring the living and dining areas are flooded with natural light."
                    projectPage="/" />

                <DesignPortfolioProjects
                    projectImg={socialInterlaceImg} projectImgAlt="Student Accommodation Stairwell Render"
                    projectName="Social Interlace" projectText="Stress, anxiety, loneliness. Three quarters of students have experienced forms of mental distress at university.
                    Social Interlace encourages social interaction in a diverse range of situations, whilst also minimising ambient stressors and maximising security to ensure students are able to build a strong social support network."
                    projectPage="/" />
            </div>

            <div className="portf-row">

                <DesignPortfolioProjects
                    projectImg={standingImg} projectImgAlt="Exhibition Stand Render"
                    projectName="Stand[ing]" projectText="The Brief: to create a unique and innovative way of exhibiting graduate projects at London's Free-Range Exhibition."
                    projectPage="/" />

                <DesignPortfolioProjects
                    projectImg={engineeringRecepImg} projectImgAlt="Engineering Office Reception Render"
                    projectName="Engineering Reception" projectText="Pailton Engineering Limited asked for a new concept for their reception area. As part of an industry enhancement year, during my degree."
                    projectPage="/" />
            </div>
        </section>

    )
}