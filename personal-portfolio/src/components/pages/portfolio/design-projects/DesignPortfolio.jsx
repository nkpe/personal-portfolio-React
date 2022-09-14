import React from "react";
import parse from 'html-react-parser';
import "../Portfolio.css";
import studioApartmentImg from "../../../../images/design-projects/mini-apartment/living_room1.png";
import socialInterlaceImg from "../../../../images/design-projects/social-interlace/studentstairwell.png";
import standingImg from "../../../../images/design-projects/exhibition-stand/exhibstand.png";
import engineeringRecepImg from "../../../../images/design-projects/pailtonengineering/pailtondesk1.png";

function DesignPortfolioProjects({ projectImg, projectImgAlt, projectName, projectText, projectPage }) {
    return (
        <div className="project-container">
            <div className="project-link project-img">
                <img src={projectImg} alt={projectImgAlt} />
            </div>
            <div className="project-text">
                <h2>{projectName}</h2>
                <p>{parse(projectText)}</p>
                {/* <div className="project-link-list">
                    <Link to={projectPage} target="_blank">More info</Link>
                </div> */}
            </div>
        </div>
    )
}

export function DesignPortfolio() {
    return (
        <section className="project-section" id="projects-design">
            <h1>design portfolio</h1>
            <div className="project-row">
                <DesignPortfolioProjects
                    projectImg={studioApartmentImg} projectImgAlt="Studio Apartment Render"
                    projectName="Studio Apartment" projectText="A luxury miniature studio apartment sits inside a converted office block. The apartment may be small at only 25.9 metres square, however it still contains all the essentials for living, including an en-suite, whilst maximising space. <br />
                    Designed for a busy professional to live in during the week. The size of the space provided a challenge to incorporate all aspects of a residential space. Large windows cover all of the exterior facing wall, ensuring the living and dining areas are flooded with natural light."
                    projectPage="/" />

                <DesignPortfolioProjects
                    projectImg={socialInterlaceImg} projectImgAlt="Student Accommodation Stairwell Render"
                    projectName="Social Interlace"
                     projectText="Stress, anxiety, loneliness. Three quarters of students have experienced forms of mental distress at university. <br/>
                    Social Interlace encourages social interaction in a diverse range of situations, whilst also minimising ambient stressors and maximising security to ensure students are able to build a strong social support network."
                    projectPage="/" />
            </div>

            <div className="project-row">
                <DesignPortfolioProjects
                    projectImg={standingImg} projectImgAlt="Exhibition Stand Render"
                    projectName="Stand[ing]" projectText="The Brief: to create a unique and innovative way of exhibiting graduate projects at London's Free-Range Exhibition. The final concept was an interactive walk through experience, built so that those viewing the work can get involved with the exhibition. <br /> Visitors can open, peer and look inside the boxes to see the displays, whilst LED strips and spotlights inside the structure create a serene, calming atmosphere ensuring the viewers spend time at each project.
                    The use of cardboard makes the stand sustainable, easy to assemble and disassemble."
                    projectPage="/" />

                <DesignPortfolioProjects
                    projectImg={engineeringRecepImg} projectImgAlt="Engineering Office Reception Render"
                    projectName="Engineering Reception" projectText="Pailton Engineering Limited asked for a new concept for their reception area. <br /> As part of an industry enhancement year, during my degree. The concept was formed around the materials that Pailton Engineering use to give a bold business statement, whilst also helping to minimise some manufacturing costs. The glass entrance ensures maximum natural sunlight, whilst decreasing draught, to create a comfortable waiting area.
                    Several podiums are incorporated within the space, as the client wished to display some of the products they manufacture. Whilst two shelves, with glass fronts, next to the waiting provide space for the company awards to be displayed.
                    "
                    projectPage="/" />
            </div>
        </section>

    )
}