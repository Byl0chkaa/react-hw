import {UsersComponent} from "../../components/JsonComponents/UsersComponents/UsersComponent/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export const JsonUserPage = () => {
    return (
        <div>

            <UsersComponent/>
            <Outlet/>
        </div>
    );
};