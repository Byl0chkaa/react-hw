import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";



export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {index: true, element: <UsersPage/> },
        {path: 'users', element: <UsersPage/>},
        {path: 'users/:id/carts', element: <CartsPage/>}
    ]
}])