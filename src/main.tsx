import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserPage} from "./pages/UserPage.tsx";
import {PostsPage} from "./pages/PostsPage.tsx";
import {CommentsPage} from "./pages/CommentsPage.tsx";
import {ProductsPage} from "./pages/ProductsPage.tsx";
import {MainPage} from "./pages/MainPage.tsx";


createRoot(document.getElementById('root')!).render(<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<MainPage/>}>
            <Route path={'users'} element={<UserPage/>}></Route>
            <Route path={'posts'} element={<PostsPage/>}></Route>
            <Route path={'comments'} element={<CommentsPage/>}></Route>
            <Route path={'products'} element={<ProductsPage/>}></Route>
        </Route>
    </Routes>
</BrowserRouter>)
