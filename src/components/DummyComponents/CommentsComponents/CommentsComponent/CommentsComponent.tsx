import {useEffect, useState} from "react";
import {DummyUserService} from "../../../../services/api.service.ts";
import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";
import type DummyCommentsModel from "../../../../models/comments/DummyCommentsModel.ts";
import type {DummyResponseCommentsModel} from "../../../../models/comments/DummyResponseCommentsModel.ts";

export const CommentsComponent = () => {
    const [comments, setComments] = useState<DummyCommentsModel[]>([]);

    useEffect(() => {
        DummyUserService.getComments()
            .then((response: DummyResponseCommentsModel) => {
                setComments(response.comments);
            });

    }, []);
    return (
        <div>
            {
                comments.map((comment: DummyCommentsModel) => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};