import React from "react";
import { Router, Route, Routes,Switch, BrowserRouter } from "react-router-dom";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import Dashboard from "../dashboard/Dashboard";


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                {/* <Switch> */}
                    <Route exact path={"/"} Component={<SignIn/>}></Route>
                    <Route path={"/SignUp"} Component={<SignUp/>}></Route>
                    <Route path={"/dashboard"} Component={<Dashboard/>}></Route>
                    {/* </Switch> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router 