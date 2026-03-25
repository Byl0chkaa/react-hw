import {Outlet} from "react-router-dom";
import {Menu} from "../menu/Menu.tsx";

export const MainPage = () => {
    return (
        <>
            <Menu/>
            <hr/>
            <Outlet/>
        </>
    );
};