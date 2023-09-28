import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function ConditionalNavbar(){
    const location = useLocation();
    const displaynonpaths = ['/','/SignUp','/forgotpassword'] 
    return(
        <div>
                {
                    
                    displaynonpaths.includes(location.pathname)?null:<Navbar/>
                }
        </div>
    )
}
export default ConditionalNavbar