import React from "react";
import { Navigate } from "react-router-dom";

 export const ProtectedRoute=({children})=>{
    let accessToken = localStorage.getItem("AccessToken");
    if(accessToken){
        return children;
    }
    return <Navigate to="/"/>;
}

