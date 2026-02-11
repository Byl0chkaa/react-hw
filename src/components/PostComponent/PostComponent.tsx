import type {PostModel} from "../../models/PostModel.ts";
import type {FC} from "react";
import './PostComponent.css'

type PostComponentProps = {post: PostModel}

export const PostComponent:FC<PostComponentProps> = ({post:{id, title, body, tags, reactions, views, userId}}) => {
    return (
        <div className={'post-card'}>
            <h2>Title: {title}</h2>
            <p>UserID: {userId}</p>
            <p>PostID: {id}</p>
            <p>Post: {body}</p>
            <p>Tags: {tags.join(', ')}</p>
            <p>Reactions: Likes: {reactions.likes} Dislikes: {reactions.dislikes}</p>
            <p>Views: {views}</p>
        </div>
    );
};