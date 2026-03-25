import { CommentsComponent } from "../../components/JsonComponents/CommentsComponents/CommentsComponent/CommentsComponent";
import {Outlet} from "react-router-dom";

export const JsonCommentsPage = () => {
    return (
        <div>
            <CommentsComponent/>
            <Outlet/>
        </div>
    );
};