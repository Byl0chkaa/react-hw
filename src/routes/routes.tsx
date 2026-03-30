import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";



export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {
            path: 'users', element: <UsersPage/>, children: [
                {path: ':id/carts', element: <CartsPage/>}

            ]
        },
    ]
}])