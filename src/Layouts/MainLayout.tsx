import {Outlet} from "react-router-dom";
import {Menu} from "../Menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};