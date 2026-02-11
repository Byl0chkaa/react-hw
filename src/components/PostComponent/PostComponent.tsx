import type {PostModel} from "../../models/PostModel.ts";
import type {FC} from "react";
import './PostComponent.css'

type PostComponentProps = {post: PostModel}

export const PostComponent: FC<PostComponentProps> = ({post:{userId, id, body, title}}) => {
    return (
        <div className={'post-card'}>
                <h4>Title: {title}</h4>
                <p>UserID: {userId}</p>
                <p>PostID: {id}</p>
                <p>Post: {body}</p>
        </div>
    );
};