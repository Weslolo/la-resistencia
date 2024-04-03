import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/core/HomePage";
import SingUpPage from "../pages/auth/singup/core/SingUpPage";
import SingInPage from "../pages/auth/singin/core/SingInPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
        children: [
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