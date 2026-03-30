import {useEffect, useState} from "react";
import type IUser from "../../model/IUser.ts";
import {getUsers} from "../../services/api.service.tsx";
import {UserComponent} from "./UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [query] = useSearchParams({page: '1'});
    
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const currentPage = query.get('page') || '1';
        getUsers(currentPage).then(value => value.users)
            .then(value => {
                setUsers(value);
            });
    }, [query]);
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};