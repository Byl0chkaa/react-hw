import {Link, Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>JSON Comments</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};