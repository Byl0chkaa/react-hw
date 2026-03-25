import {Link, Outlet} from "react-router-dom";

export const PostsPage = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>JSON Posts</Link></li>
                <li><Link to={'dummyjson'}>Dummy Posts</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};