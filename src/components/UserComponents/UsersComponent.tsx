import {useEffect, useState} from "react";
import type IUser from "../../models/IUser.ts";
import {UserService} from "../../services/api.service.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        UserService.getUsers().then(res => setUsers(res.users));
    }, []);
    return (
        <div>
            {
               users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};