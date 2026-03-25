import {useEffect, useState} from "react";
import {DummyUserService} from "../../../../services/api.service.ts";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import type DummyUsersModel from "../../../../models/users/DummyUsersModel.ts";
import type {DummyResponseUserModel} from "../../../../models/users/DummyResponseUserModel.ts";


export const UsersComponent = () => {
    const [users, setUsers] = useState<DummyUsersModel[]>([]);

    useEffect(() => {
        DummyUserService.getUsers()
            .then((response: DummyResponseUserModel) => {
                setUsers(response.users);
            });
    }, []);
    return (
        <div>
            {
                users.map((user: DummyUsersModel) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};