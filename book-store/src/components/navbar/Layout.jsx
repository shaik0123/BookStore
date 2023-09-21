import React from "react";
import ConditionalNavbar from "./ConditionalNavbar";
function Layout({children}){
    return(
        <div>
            <ConditionalNavbar/>
            {children}
        </div>
    )
}
export default Layout