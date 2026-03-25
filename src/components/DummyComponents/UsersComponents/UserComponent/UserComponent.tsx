import type {FC} from "react";
import type DummyUsersModel from "../../../../models/users/DummyUsersModel.ts";

interface DummyUserProps {
    user: DummyUsersModel
}

export const UserComponent: FC<DummyUserProps> = ({user}) => {

    return (
        <div>
            {user.username}
        </div>
    );
};