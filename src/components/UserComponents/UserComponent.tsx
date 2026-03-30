import type IUser from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    const navigation = useNavigate();
    const onButtonClick = () => {
        navigation('/users/' + user.id + '/carts')
    }
    return (
        <div>
            <p>{user.username}: {user.email}</p>
            <button className={'border-1 bg-blue-100'} onClick={onButtonClick}>click on me</button>
        </div>
    );
};