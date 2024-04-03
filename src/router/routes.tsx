import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/core/HomePage";
import SingUpPage from "../pages/auth/singup/core/SingUpPage";
import SingInPage from "../pages/auth/singin/core/SingInPage";
import RootPage from "../pages/root/core/RootPage";



import React from 'react';
import BaseWrapper from "../components/BaseWrapper/core/BaseWrapper";

// import { Container } from './styles';

const BaseRouter: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BaseWrapper />} >
                        <Route index Component={HomePage} />
                        <Route path="/SingUp" Component={SingUpPage} />
                        <Route path="/SingIn" Component={SingInPage} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </div>);
}

export default BaseRouter;