import React from "react";
import { Outlet } from "react-router-dom";

export function MainContent () {
    return(
        <main>
            <Outlet />
        </main>
        
    )
}