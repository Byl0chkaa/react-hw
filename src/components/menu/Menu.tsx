import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li><Link to='/cars'>See Cars</Link></li>
            <li><Link to='/cars/create'>Add Car</Link></li>
        </ul>
    );
};