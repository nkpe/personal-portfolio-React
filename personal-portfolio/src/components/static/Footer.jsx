import React from "react";
import { SocialMedia } from "./SocialMedia";

export function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <a href="#top" name="pg-top">back to top</a>
            </div>
            <div className="social-footer">
                <SocialMedia />
                <div id="copyright">&#169; Naomi Pearse 2022</div>
            </div>
        </footer>
    )
}