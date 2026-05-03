import type IComment from "../../model/IComment.ts";

interface CommentComponentProps {
    comment: IComment
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div>
            <p>Comment: {comment.body}</p>
        </div>
    );
};