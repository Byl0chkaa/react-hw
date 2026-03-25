import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainPage/>, children:[
            {path: 'users', element: <UserPage/>},
            {path: 'posts', element:<PostsPage/>},
            {path: 'comments', element:<CommentsPage/>},
            {path: 'products', element:<ProductsPage/>}
        ]
    }
])