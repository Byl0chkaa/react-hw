import type {FC} from "react";
import type JsonCommentsModel from "../../../../models/comments/JsonCommentsModel.ts";
import './CommentComponent.css'

interface JsonCommentsProps {
    comment: JsonCommentsModel
}

export const CommentComponent:FC<JsonCommentsProps> = ({comment}) => {
    return (
        <div>
            <p><h3>{comment.id}</h3> {comment.body}</p>
        </div>
    );
};