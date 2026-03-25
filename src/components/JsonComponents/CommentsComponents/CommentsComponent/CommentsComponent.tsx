import {useEffect, useState} from "react";
import {JsonUserService} from "../../../../services/api.service.ts";
import type JsonUsersModel from "../../../../models/users/JsonUsersModel.ts";
import type JsonCommentsModel from "../../../../models/comments/JsonCommentsModel.ts";
import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";

export const CommentsComponent = () => {
    const [comments, setComments] = useState<JsonCommentsModel[]>([]);

    useEffect(() => {
        JsonUserService.getPosts()
            .then((posts) => {
                setComments(posts);
            });

    }, []);
    return (
        <div>
            {
                comments.map((comment: JsonUsersModel) => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};