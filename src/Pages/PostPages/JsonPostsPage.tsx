import {PostsComponent} from "../../components/JsonComponents/PostsComponents/PostsComponent/PostsComponent.tsx";
import {Outlet} from "react-router-dom";

export const JsonPostsPage = () => {
    return (
        <div>
            <PostsComponent/>
            <Outlet/>
        </div>
    );
};