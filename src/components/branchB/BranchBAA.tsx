import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";
import './BranchBAA.css'

export const BranchBAA = () => {
    const {theme} = useContext(MyContext);

    return (
        <div className={theme}>
            this is theme value - {theme}
        </div>
    );
};