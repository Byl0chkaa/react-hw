import {useEffect} from "react";
import {userActions} from "../../redux/slices/userSlice/userSlice.ts";
import {UserComponent} from "./UserComponent.tsx";
import type IUser from "../../model/IUser.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

export const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, [])

    return (
        <>
            {
                users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </>
    );
};