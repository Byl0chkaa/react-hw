import type {CommentsModel} from "../../models/CommentsModel.ts";
import type {FC} from "react";
import './CommentComponent.css'

type CommentProps = {comment: CommentsModel}
export const CommentComponent: FC<CommentProps> = ({comment:{postId, id, name, email, body}}) => {
    return (
        <div className={'comment-cards'}>
        <h2>{name}</h2>
         <p>CommentID: {id}</p>
         <p>PostID: {postId}</p>
         <p>Email: {email}</p>
         <p>Comment: {body}</p>
        </div>
    );
};