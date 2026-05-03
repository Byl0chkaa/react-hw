import type IUser from "../../model/IUser.ts";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            <p>User name: {user.name}</p>
            <p>User Phone: {user.phone}</p>
            <p>User company: {user.company.name}</p>
            <p>User Email: {user.email}</p>
            <hr/>
        </div>
    );
};