import {useEffect, useState} from "react";
import type IUser from "../../models/IUser.ts";
import {getAll} from "../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import { UserComponent } from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUser[]}>('/users')
            .then(res => setUsers(res.users))
    }, []);
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;