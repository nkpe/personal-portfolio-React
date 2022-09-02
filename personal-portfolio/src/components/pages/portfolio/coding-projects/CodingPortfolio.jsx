import React from "react";
import "../Portfolio.css";

export function CodingPortfolio () {
    return (
        <section class="portf-section" id="portf-code">
            <h1>coding projects</h1>
            {/* Code Row 1 */}
            <section class="portf-row">
                {/* Press on Nails Project */}
                <div class="project-container">
                    <a class="portf-proj-link portf-proj-img" href="https://dazzlingnails.netlify.app/"
                        target="_blank">
                        <img src="../imgs/coding-projects/dazzling-nails-homepage.png"
                            alt="Website for client called Dazzling Nails." />
                    </a>

                    <div class="portf-text">
                        <h2>Dazzling Nails - Live client</h2>
                        <p>My client, Dazzling Nails, requires an e-commerce website to sell their press on nails.
                            <br />
                            This project is still in development. <br />
                        </p>
                        <ul class="project-link-list">
                            <li>
                                <a class="portf-proj-link" href="https://dazzlingnails.netlify.app/"
                                    target="_blank">Host Link
                                </a>
                            </li>
                            <a class="portf-proj-link" href="#" target="_blank">Source Code</a>
                        </ul>

                    </div>
                </div>

                {/* Pairs Game */}
                <div class="project-container">
                    <a class="portf-proj-link portf-proj-img" 
                        href="https://nkpe.github.io/Pairs-Game/"
                        target="_blank">
                        <img src="../imgs/coding-projects/pair-colada-landing.png" alt="Pairs Game website." />
                    </a>

                    <div class="portf-text">
                        <h2>Pairs Game</h2>
                        <p>As part of my web development studies I created a pairs game. <br /> Technologies used:
                            Javascript, HTML5, CSS3 and Bootstrap <br />
                        </p>
                        <ul class="project-link-list">
                            <li>
                                <a class="portf-proj-link" 
                                    href="https://nkpe.github.io/Pairs-Game/"
                                    target="_blank">Host Link
                                    </a>
                            </li>
                            <li>
                                <a class="portf-proj-link" 
                                    href="https://github.com/nkpe/Pairs-Game"
                                    target="_blank">Source Code
                                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Code Row 2 */}
            <section class="portf-row">
                {/* Quiz Project - Climbing */}
                <div class="project-container">
                    <a class="portf-proj-link portf-proj-img" href="https://nkpe.github.io/Climbing-Quiz/"
                        target="_blank">
                        <img src="../imgs/coding-projects/flashquiz-home.png" alt="Climbing quiz website" />
                    </a>

                    <div class="portf-text">
                        <h2>Flash Quiz - Javascript</h2>
                        <p>During my studies I made this quiz to practise vanilla Javascript, Bootstrap, CSS3 and
                            HTML5.<br />
                            This project uses Javascript to check the answer selected by the user. When the user
                            selects 'finish', their score is shown as a fraction and percentage at the top of the
                            page.
                        </p>
                        <a class="portf-proj-link" href="https://nkpe.github.io/Climbing-Quiz/" target="_blank">Host
                            Link</a>
                        <a class="portf-proj-link" href="https://github.com/nkpe/Climbing-Quiz"
                            target="_blank">Source Code</a>

                    </div>
                </div>

                {/* Athena Hackathon '22 - Circular */}
                <div class="project-container">
                    <a class="portf-proj-link portf-proj-img" href="#" target="_blank">
                        <img src="../imgs/coding-projects/athena-hack-circular-home-page.png"
                            alt="Website made during Athena Hackathon 2022" />
                    </a>

                    <div class="portf-text">
                        <h2>Circular - Athena Hackathon</h2>
                        <p>In June 2022 I took part as team in Athena Hackathon to create a website that would allow
                            anyone to be able to access a laptop that was no longer needed <br />
                            Technologies used: Vue.js , HTML5, CSS3 and Bootstrap <br />
                        </p>
                        <a class="portf-proj-link"
                            href="https://app.showcode.io/project/ce976759-1f9a-4de8-a78c-39d6c380bce5"
                            target="_blank">Submission
                        </a>
                        <a class="portf-proj-link" href="https://github.com/lucky-eight/laptop-library"
                            target="_blank">Source Code
                        </a>
                    </div>
                </div>
            </section>
        </section>

    )
}