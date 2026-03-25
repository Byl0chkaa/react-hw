import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../Layouts/MainLayout.tsx";
import {UserPage} from "../Pages/MainUserPage/UserPage.tsx";
import {JsonUserPage} from "../Pages/UserPages/JsonUserPage.tsx";
import {DummyUserPage} from "../Pages/UserPages/DummyUserPage.tsx";
import {PostsPage} from "../Pages/MainPostsPage/PostsPage.tsx";
import {JsonPostsPage} from "../Pages/PostPages/JsonPostsPage.tsx";
import {DummyPostsPage} from "../Pages/PostPages/DummyPostsPage.tsx";
import {CommentsPage} from "../Pages/MainCommentsPage/CommentsPage.tsx";
import {JsonCommentsPage} from "../Pages/CommentsPage/JsonCommentsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'users', element: <UserPage/>, children: [
                    {path: 'jsonplaceholder', element: <JsonUserPage/>},
                    {path: 'dummyjson', element: <DummyUserPage/>}
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <JsonPostsPage/>},
                    {path: 'dummyjson', element: <DummyPostsPage/>}
                ]
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <JsonCommentsPage/>}
                ]
            }
        ]
    }
])