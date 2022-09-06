import React from "react";

export function DesignProductPage (props) {
    return(
        <section>
            <h1>{projectTitle}</h1>
            <img src={projectImages[0]} />
            <p>{paragraph[0]}</p>
            <img src={projectImages[1]} />
            <img src={projectImages[2]} />
            <p>{paragraph[1]}</p>
            <img src={projectImages[3]} />
            <img src={projectImages[4]} />
            <p>{paragraph[2]}</p>
        </section>
    )

}