import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ForgotPassword from "../forgotpassword/Forgotpassword";
import Layout from "../navbar/Layout";
import CardsOne from "../card/BookOne";
import CardsTwo from "../card/BookTwo";


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path={'/'} element={<SignIn />}></Route>
                        <Route path={'/SignUp'} element={<SignUp />}></Route>
                        <Route path={'/dashboard'} element={<Dashboard />}></Route>
                        <Route path={'/forgotpassword'} element={<ForgotPassword />}></Route>
                        <Route path={'/cardsone'} element={<CardsOne />}></Route>
                        <Route path={'/cardstwo'} element={<CardsTwo />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}
export default Router 