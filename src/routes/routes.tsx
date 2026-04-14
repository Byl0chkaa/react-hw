import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

export const routes = createBrowserRouter([ // array with routes
    {path: '/', element:<MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: '/auth/resources', element: <AuthResourcesPage/>}
        ]}
]);