import {Link, Outlet} from "react-router-dom";

export const UserPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>JSON Users</Link></li>
                <li><Link to={'dummyjson'}>Dummy Users</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};