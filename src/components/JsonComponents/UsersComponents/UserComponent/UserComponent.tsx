import type {FC} from "react";
import type JsonUsersModel from "../../../../models/users/JsonUsersModel.ts";

interface JsonUserProps {
user: JsonUsersModel
}

export const UserComponent: FC<JsonUserProps> = ({user}) => {

    return (
        <div>
            {user.username}
        </div>
    );
};