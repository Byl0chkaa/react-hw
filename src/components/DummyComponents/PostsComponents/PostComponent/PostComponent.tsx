import type {FC} from "react";
import './PostComponent.css'
import type DummyPostsModel from "../../../../models/posts/DummyPostsModel.ts";

interface DummyPostsProps {
    post: DummyPostsModel
}

export const PostComponent: FC<DummyPostsProps> = ({post}) => {
    return (
        <div>
            <p><h3>{post.id}</h3> {post.body}</p>
        </div>
    );
};