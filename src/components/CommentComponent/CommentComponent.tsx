import type {FC} from "react";
import type {Comments} from "../../models/CommentModel.ts";
import './CommentComponent.css'

type CommentProps = { comment: Comments }
export const CommentComponent: FC<CommentProps> = ({comment: {id, body, postId, likes, user}}) => {
    return (
        <div className={'comment-card'}>
            <h3>Comment: {body}</h3>
            <p>CommentID: {id}</p>
            <p>PostID: {postId}</p>
            <p>Likes: {likes}</p>
            <p>User: UserID: {user.id}, UserName: {user.username}, FullName: {user.fullName} </p>
        </div>
    );
};