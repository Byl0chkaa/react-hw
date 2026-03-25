import {useEffect, useState} from "react";
import type JsonUsersModel from "../../../../models/users/JsonUsersModel.ts";
import {JsonUserService} from "../../../../services/api.service.ts";
import {UserComponent} from "../UserComponent/UserComponent.tsx";


export const UsersComponent = () => {
    const [users, setUsers] = useState<JsonUsersModel[]>([]);

    useEffect(() => {
    JsonUserService.getUsers()
        .then((users) => {
            setUsers(users);
        });

    }, []);
    return (
        <div>
            {
                users.map((user: JsonUsersModel) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};