import {Outlet} from "react-router-dom";
import {PaginationComponent} from "../components/PaginationComponent/PaginationComponent.tsx";

export const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};