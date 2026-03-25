import {Outlet} from "react-router-dom";
import {PostsComponent} from "../../components/DummyComponents/PostsComponents/PostsComponent/PostsComponent.tsx";

export const DummyPostsPage = () => {
    return (
        <div>
            <PostsComponent/>
            <Outlet/>
        </div>
    );
};