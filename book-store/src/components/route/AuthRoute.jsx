import React from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute=({children})=>{
    let accessToken = localStorage.getItem("AccessToken")
    if(accessToken === undefined || accessToken === null){
        console.log("false");
        return children
    }
    return <Navigate to="/dashboard" />
    console.log("true");
}