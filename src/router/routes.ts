import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/core/HomePage";
import SingUpPage from "../pages/auth/singup/core/SingUpPage";
import SingInPage from "../pages/auth/singin/core/SingInPage";
import RootPage from "../pages/root/core/RootPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootPage,
        children: [
            {
                path: "/Home",
                Component: HomePage
            },
            {
                path: "/SingUp",
                Component: SingUpPage
            },
            {
                path: "/SingIn",
                Component: SingInPage
            }
        ]
    },

]);
export default router;