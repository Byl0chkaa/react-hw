import {
    CommentsComponent
} from "../../components/DummyComponents/CommentsComponents/CommentsComponent/CommentsComponent.tsx";
import {Outlet} from "react-router-dom";

export const DummyCommentsPage = () => {
    return (
        <div>
            <CommentsComponent/>
            <Outlet/>
        </div>
    );
};