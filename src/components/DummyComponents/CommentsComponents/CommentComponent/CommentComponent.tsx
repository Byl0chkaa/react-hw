import type {FC} from "react";
import type DummyCommentsModel from "../../../../models/comments/DummyCommentsModel.ts";
import './CommentComponent.css'

interface DummyCommentsProps {
    comment: DummyCommentsModel
}

export const CommentComponent:FC<DummyCommentsProps> = ({comment}) => {
    return (
        <div>
            <p><h3>{comment.id}</h3> {comment.body}</p>
        </div>
    );
};