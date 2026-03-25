import type {FC} from "react";
import type JsonPostsModel from "../../../../models/posts/JsonPostsModel.ts";
import './PostComponent.css'

interface JsonPostsProps {
    post: JsonPostsModel
}

export const PostComponent: FC<JsonPostsProps> = ({post}) => {
    return (
        <div>
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};