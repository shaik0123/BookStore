import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ForgotPassword from "../forgotpassword/Forgotpassword";
import Layout from "../navbar/Layout";
import CardsOne from "../book_components/BookDetails";
import CardsFive from "../book_components/OrderSuccessful";
import { AuthRoute } from "./AuthRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import Cart from "../book_components/Cart";


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path={'/'} element={<AuthRoute><SignIn /></AuthRoute>}></Route>
                        <Route path={'/SignUp'} element={<AuthRoute><SignUp /></AuthRoute>}></Route>
                        <Route path={'/dashboard'} element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
                        <Route path={'/forgotpassword'} element={<ForgotPassword />}></Route>
                        <Route path={'/cardsone'} element={<CardsOne />}></Route>
                        <Route path={'/cardstwo'} element={<Cart />}></Route>
                        <Route path={'/cardsfive'} element={<CardsFive />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}
export default Router 